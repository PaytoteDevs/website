import React from 'react';
import SignIn from '../components/SignIn';
import GlobalVariableProvider from '../App';

import { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';
// const GlobalVariableContext = createContext();

// const GlobalVariableProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//       <GlobalVariableContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//           {children}
//       </GlobalVariableContext.Provider>
//   );
// }

function MainStorePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated)
  return (
    <div>
      <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <SignIn setIsAuthenticated={setIsAuthenticated} />
      </LoginContext.Provider>
    </div>
  );
}

export default MainStorePage;
