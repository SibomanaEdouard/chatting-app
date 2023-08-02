import React, { createContext, useState } from 'react';

export const ResponseContext = createContext([]);

export const ResponseContextProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  const updateResponseData = (data) => {
    setResponseData(data);
  };

  return (
    <ResponseContext.Provider value={{ responseData: responseData, updateResponseData: updateResponseData }}>
      {children}
    </ResponseContext.Provider>
  );
};
