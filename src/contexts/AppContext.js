import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // state:
  

  return (
    <AppContext.Provider value={{  }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;