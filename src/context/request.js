import React from 'react';

export const RequestHostContext = React.createContext();

export const RequestProvider = ({ host, setResponse, children }) => {
  return (
    <RequestHostContext.Provider value={{ host, setResponse }}>
      {children}
    </RequestHostContext.Provider>
  );
};
