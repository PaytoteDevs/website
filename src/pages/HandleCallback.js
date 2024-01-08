import React from 'react'
import SignIn from '../components/SignIn';
import GlobalVariableProvider from './MainStorePage'
import { components } from '@aws-amplify/ui-react';
import MainStorePage from './MainStorePage';
import { useContext } from 'react';

const HandleCallback = () => {
    // do work in database to show that they've signed in succesfully
    // const { isAuthenticated, setIsAuthenticated } = useContext(GlobalVariableProvider);

  return (
    <SignIn setIsAuthenticated={true} />
  )
}

export default HandleCallback