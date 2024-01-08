import React from 'react';
import SignIn from '../components/SignIn';
import GlobalVariableProvider from '../App';

import { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';
import { createContext, useReducer } from 'react';

function MainStorePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("authenticated value: ", isAuthenticated);

  return (
    <div>
      <SignIn />
    </div>
  );
}

export default MainStorePage;
