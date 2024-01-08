import React, { useState } from 'react';
import SignIn from '../components/SignIn';

import { createContext, useContext } from 'react';
const GlobalVariableContext = createContext();

const GlobalVariableProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <GlobalVariableContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          {children}
      </GlobalVariableContext.Provider>
  );
}

function MainStorePage() {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(GlobalVariableProvider);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <SignIn setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default MainStorePage;
