import React, { createContext, useState } from "react";

// Set a default value for tripData and setTripData
export const CreateTripContext = createContext({
  tripData: { locationInfo: null },
  setTripData: () => {}
});

export const CreateTripProvider = ({ children }) => {
  const [tripData, setTripData] = useState({
    locationInfo: null,  // Default value, adjust to your structure
  });

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      {children}
    </CreateTripContext.Provider>
  );
};
