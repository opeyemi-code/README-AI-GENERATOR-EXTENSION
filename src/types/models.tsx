import type React from "react";

export type TextButtonProp = {
  text: string;
  className: string;
  handleClick?: () => void;
};

export type DataContextType = {
  homeScreen: boolean;
  setHomeScreen: React.Dispatch<React.SetStateAction<boolean>>;
  onBoardingScreen: boolean;
  setOnBoardingScreen: React.Dispatch<React.SetStateAction<boolean>>;
  validPageScreen: boolean;
  setValidPageScreen: React.Dispatch<React.SetStateAction<boolean>>;
  inValidPageScreen: boolean;
  setInValidPageScreen: React.Dispatch<React.SetStateAction<boolean>>;
};
