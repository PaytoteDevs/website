import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Authorize = () => {
  const [credentials, setCredentials] = useState({
    applicationId: '',
    environment: '',
    applicationSecret: ''
  });
  const [state, setState] = useState('');

  useEffect(() => {
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
  
    // Generate a secure, random token
    const generateStateToken = () => {
      return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
    };
  
    setState(generateStateToken());
  }, []);  

  const baseUrl = credentials.environment === "production" ? "https://connect.squareup.com" : "https://connect.squareupsandbox.com";
  
  const url = `${baseUrl}/oauth2/authorize?client_id=${credentials.applicationId}&scope=PAYMENTS_READ&session=false&state=${state}`;
  console.log(url)
  return (
    <div className='wrapper'>
      <a className='btn' href={url}>
        <strong>Authorize</strong>
      </a>
    </div>
  );
};

export default Authorize;
