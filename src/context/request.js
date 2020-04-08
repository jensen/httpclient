import React from 'react';

export const RequestHostContext = React.createContext();

export const RequestProvider = ({ host, children }) => {
  return (
    <RequestHostContext.Provider value={host}>
      {children}
    </RequestHostContext.Provider>
  );
};
