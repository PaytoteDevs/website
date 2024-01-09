import React, { useState, useEffect } from "react";
import SignIn from '../components/SignIn';
import { generateClient } from "aws-amplify/api";
import { updateAuthentications } from '../graphql/mutations';
import { getCurrentUser } from 'aws-amplify/auth';

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

  async function updatedAuthentications(userID) {
    console.log(userID)
    try {
      const response = await client.graphql({
        query: updateAuthentications,
        variables: {
            input: {
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
    await updatedAuthentications(userID)
  }

  useEffect(() => {
    fetchDataAndUpdate();
  }, []); // Empty dependency array means it runs once after the first render


//   call square update funtion here
  // import the general clients and stuff needed
  // get the one which is tied to user email, then update it, we need user's email though
  return (
    <SignIn />
  );
};

export default HandleCallback;
