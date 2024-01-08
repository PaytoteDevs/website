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
import { createAuthentications } from '../graphql/mutations';
import { updateAuthentications } from '../graphql/mutations';
import Authorize from './Authorize'

const client = generateClient();

const SignIn = ({ signOut }) => {
  const [isStripeEnabled, setIsStripeEnabled] = useState(false);
    const [isSquareEnabled, setIsSquareEnabled] = useState(false);

    async function createAuthentications() {
      await client.graphql({
        query: createAuthentications,
        variables: {
            input: {
        "Square": false,
        "Stripe": false
      }
        }
      });
      }

    // createAuthentications()
    
    // const updatedAuthentications = await client.graphql({
    //   query: updateAuthentications,
    //   variables: {
    //       input: {
    //   "Square": true,
    //   "Stripe": true
    // }
    //   }
    // });

    // useEffect(() => {
    //     fetchAuthentications(1);
    // }, []);

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