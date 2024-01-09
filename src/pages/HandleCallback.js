import React, { useState, useEffect } from "react";
import SignIn from '../components/SignIn';
import { generateClient } from "aws-amplify/api";
import { updateAuthentications } from '../graphql/mutations';
import { getCurrentUser } from 'aws-amplify/auth';
import { listAuthentications, getAuthentications } from "../graphql/queries";

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
        console.log("authentications: ", allAuthentications);
        const userAuthentication = allAuthentications.listAuthentications.items.filter(item => {
          return item.userID === desiredUserId
        })

        console.log("filtered authentications: ", userAuthentication);
        return userAuthentication;
    } catch (error) {
        // console.error("Error fetching authentications: ", error);
        return []; // Return an empty array in case of error
    }
  }

  async function updatedAuthentications(id, userID) {
    console.log(id, userID)
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
    console.log(data[0])
    await updatedAuthentications(data[0].id, userID)
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
