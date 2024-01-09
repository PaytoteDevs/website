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
      const { id, username, userId, signInDetails } = await getCurrentUser();
      // console.log(`The username: ${username}`);
      // console.log(`The userId: ${userId}`);
      // console.log(`The signInDetails: ${signInDetails}`);
      return [id, userId]
    } catch (err) {
      console.log(err);
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
    const arr = await currentAuthenticatedUser()
    const id = arr[0]
    const userID = arr[1]
    await updatedAuthentications(id, userID)
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
