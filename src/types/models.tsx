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
};
