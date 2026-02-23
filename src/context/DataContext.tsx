import React, { createContext, useState } from "react";
import type { DataContextType } from "../types/models";

const DataContext = createContext<null | DataContextType>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [homeScreen, setHomeScreen] = useState<boolean>(true);
  const [onBoardingScreen, setOnBoardingScreen] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
        homeScreen,
        setHomeScreen,
        onBoardingScreen,
        setOnBoardingScreen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
