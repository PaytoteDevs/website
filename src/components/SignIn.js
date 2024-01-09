import React, { useState, useEffect } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import { createAuthentications, 
        updateAuthentications, 
      } from '../graphql/mutations';
import { listAuthentications, getAuthentications } from "../graphql/queries";
import Authorize from './Authorize'
import { getCurrentUser } from 'aws-amplify/auth';

const client = generateClient();

// for showing status of POS sign on, when the user first signs on, they are are creating an object that keeps track of integrations
// every time we fetch the POS status object and render the statuses
// In HandleCallBack.js, we update the statuses appropriately after a successful sign on has been made
const SignIn = ({ signOut, authType, message }) => {
  // console.log(authType, message)
  const [isStripeEnabled, setIsStripeEnabled] = useState(false);
  const [isSquareEnabled, setIsSquareEnabled] = useState(false);

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

  // create just one instance of an authentications object
  // have them properly updated with their values based on the fetch function
  // List all items
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

  async function newAuthentications(desiredUserId) {
    try {
     const response = await client.graphql({
        query: createAuthentications,
        variables: {
            input: {
        "Square": false,
        "Stripe": false,
        "userID": desiredUserId
      }
        }
      });
      // console.log("created auth obj")
    }
    catch (error) {
      // console.error("Error fetching authentications: ", error);
    }
  }
  // console.log("rendered")
  let isCreatingAuthentications = false;

  async function fetchDataAndUpdate() {
    const desiredUserId = await currentAuthenticatedUser();
    let data = await getAllAuthentications(desiredUserId);
  
    // filter here for only object that has matching userID

    if (data.length === 0 && !isCreatingAuthentications) {
      // console.log("call create auth function here")
      isCreatingAuthentications = true;
      await newAuthentications(desiredUserId)
      isCreatingAuthentications = false;
      data = await getAllAuthentications(desiredUserId);
    }

    // console.log("data: ", data)
    // console.log("data[0]: ", data[0])
    setIsStripeEnabled(data[0].Stripe);
    setIsSquareEnabled(data[0].Square);
    return data
}

  useEffect(() => {
    fetchDataAndUpdate();
  }, []); // Empty dependency array means it runs once after the first render

  return (
    <View className="App">
      <Flex direction="row" justifyContent="center" alignItems="center" margin="1rem 0">
                      <Button 
                    className={isStripeEnabled ? "button-enabled" : "button-disabled"}
                    disabled={!isStripeEnabled}
                > 

                    Stripe
                </Button>

                {/* add in check to see if enabled and prop up disconncet ubtton, do same for stripe */}
                {authType ? message :
                      (
                        isSquareEnabled ? "connected" :"disconnected"
                      )
                }

                <Button 
                    className={isSquareEnabled ? "button-enabled" : "button-disabled"}
                    disabled={!isSquareEnabled}
                >
                    Square
                </Button>

            </Flex>

            <div>
              <div> Hi! Click here to sign your store up on PayTote!</div>
              <Authorize />
            </div>
    </View>
  );
};

export default withAuthenticator(SignIn);