import React, { createContext, useState } from 'react';

// Create the Context
export const ResponseContext = createContext();

// Create the Provider component
export const ResponseProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  // Function to update the response data
  const updateResponseData = (data) => {
    setResponseData(data);
  };

  return (
    <ResponseContext.Provider value={{ responseData, updateResponseData }}>
      {children}
    </ResponseContext.Provider>
  );
};
