import React from 'react'
import SignIn from '../components/SignIn';
import GlobalVariableProvider from './MainStorePage'
import { components } from '@aws-amplify/ui-react';
import MainStorePage from './MainStorePage';
import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

const HandleCallback = () => {
    // do work in database to show that they've signed in succesfully
  const { setIsAuthenticated } = useContext(LoginContext);

  return (
    <SignIn setIsAuthenticated={ setIsAuthenticated } />
  )
}

export default HandleCallback