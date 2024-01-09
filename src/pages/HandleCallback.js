import React, { useState, useEffect } from "react";
import SignIn from '../components/SignIn';
import { generateClient } from "aws-amplify/api";
import { updateAuthentications } from '../graphql/mutations';
import { getCurrentUser } from 'aws-amplify/auth';
import { listAuthentications, getAuthentications } from "../graphql/queries";
import axios from 'axios';

const client = generateClient()

const HandleCallback = () => {

  console.log("data work will go here! set square auth status to true, update db etc.")
  async function currentAuthenticatedUser() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      // console.log(`The username: ${username}`);
      // console.log(`The userId: ${userId}`);
      // console.log(`The signInDetails: ${signInDetails}`);
      return userId
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllAuthentications(desiredUserId) {
    try {
        const response = await client.graphql({
            query: listAuthentications // modify to filter for only ones that hold email equal to whatever user email is, need to update model too
        });
        const allAuthentications = response.data;
        // console.log("authentications: ", allAuthentications);
        const userAuthentication = allAuthentications.listAuthentications.items.filter(item => {
          return item.userID === desiredUserId
        })

        // console.log("filtered authentications: ", userAuthentication);
        return userAuthentication;
    } catch (error) {
        // console.error("Error fetching authentications: ", error);
        return []; // Return an empty array in case of error
    }
  }

  async function updatedAuthentications(id, userID) {
    // console.log(id, userID)
    try {
      const response = await client.graphql({
        query: updateAuthentications,
        variables: {
            input: {
              "id": id,
              "Square": true,
              "Stripe": false,
              "userID": userID
            }
          }
        });
    }
    catch (error) {
      console.error("Error updating authentications: ", error);
    }
  }

  async function fetchDataAndUpdate() {
    const userID = await currentAuthenticatedUser()
    let data = await getAllAuthentications(userID);
    await updatedAuthentications(data[0].id, userID)
  }

  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleGetToken = async (authorizationCode) => {
    const url = 'https://connect.squareupsandbox.com/oauth2/token';
    const data = {
      client_id: credentials.applicationId,
      client_secret: credentials.applicationSecret,
      code: authorizationCode,
      grant_type: 'authorization_code'
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Square-Version': '2021-05-13',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log("user's obtain token: ", responseData.access_token)
      setToken(responseData.access_token); // Assuming the token is in responseData.access_token
    } catch (error) {
      setError('Failed to fetch token: ' + error.message);
    }
  };

  const [code, setCode] = useState('');
  const [responseType, setResponseType] = useState('');
  const [stateToken, setStateToken] = useState('');


  const [credentials, setCredentials] = useState({
    applicationId: '',
    environment: '',
    applicationSecret: ''
  });

  useEffect(() => {
    // get app secret so that we can call obtain token api
    const fetchCredentials = async () => {
      try {
        const response = await axios.get('https://av1iknmhhd.execute-api.us-west-1.amazonaws.com/v1');
        const newCredentials = {
          applicationId: response.data.SQ_APPLICATION_ID,
          environment: response.data.SQ_ENVIRONMENT,
          applicationSecret: response.data.SQ_APPLICATION_SECRET
        };
        setCredentials(newCredentials);
  
      } catch (error) {
        console.error('Error fetching credentials:', error);
      }
    };
    fetchCredentials();


    fetchDataAndUpdate();
    const queryParams = new URLSearchParams(window.location.search);
    setCode(queryParams.get('code'));
    console.log("code: ", queryParams.get('code'))

    setResponseType(queryParams.get('response_type'));
    setStateToken(queryParams.get('state'));

    //now call obtain token api
    handleGetToken(code)

  }, []); // Empty dependency array means it runs once after the first render

  return (
    <SignIn authType="Square" message="Successfully authorized"/>
  );
};

export default HandleCallback;
