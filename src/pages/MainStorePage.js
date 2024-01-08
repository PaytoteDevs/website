import React from 'react';
import SignIn from '../components/SignIn';
import GlobalVariableProvider from '../App';

import { useState, useContext } from 'react';
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
      <SignIn setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default MainStorePage;
