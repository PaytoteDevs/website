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

const client = generateClient();

const SignIn = ({ signOut }) => {
  const [isStripeEnabled, setIsStripeEnabled] = useState(false);
    const [isSquareEnabled, setIsSquareEnabled] = useState(false);

    

    // create just one instance of an authentications object
    // have them properly updated with their values based on the fetch function
    // List all items
    async function getAllAuthentications() {
      const allAuthentications = await client.graphql({
          query: listAuthentications
      });
      console.log("authentications: ", allAuthentications);
      return allAuthentications;
  }
  let data = getAllAuthentications()
  let auth1 = data[0]
  console.log("auth struct: ", auth1)



  
  return (
    <View className="App">
      <Flex direction="row" justifyContent="center" alignItems="center" margin="1rem 0">
                      <Button 
                    className={isStripeEnabled ? "button-enabled" : "button-disabled"}
                    disabled={!isStripeEnabled}
                >
                    Stripe
                </Button>
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