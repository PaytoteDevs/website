import React, { createContext, useReducer } from 'react';

const loginReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isAuthenticated: true };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  };

// Initial state
const initialState = {
  isAuthenticated: false,
};

// Create context
export const LoginContext = createContext();

// Context provider
export const GlobalVariableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
