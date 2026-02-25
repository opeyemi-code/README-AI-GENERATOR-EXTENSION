import React, { createContext, useState } from "react";
import type { DataContextType } from "../types/models";

const DataContext = createContext<null | DataContextType>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [homeScreen, setHomeScreen] = useState<boolean>(true);
  const [onBoardingScreen, setOnBoardingScreen] = useState<boolean>(false);
  const [validPageScreen, setValidPageScreen] = useState<boolean>(false);
  const [inValidPageScreen, setInValidPageScreen] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
        homeScreen,
        setHomeScreen,
        onBoardingScreen,
        setOnBoardingScreen,
        validPageScreen,
        setValidPageScreen,
        inValidPageScreen,
        setInValidPageScreen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
