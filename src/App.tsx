import { useContext } from "react";
import HomeScreen from "./components/HomeScreen";
import OnBoardingScreen from "./components/OnBoardingScreen";
import DataContext, { DataProvider } from "./context/DataContext";
import type { DataContextType } from "./types/models";
import ValidPage from "./components/ValidPage";
import InValidPage from "./components/InValidPage";

function AppContent() {
  const { homeScreen, onBoardingScreen, validPageScreen, inValidPageScreen } =
    useContext<DataContextType | null>(DataContext)!;

  return (
    <>
      {homeScreen && <HomeScreen />}
      {onBoardingScreen && <OnBoardingScreen />}
      {validPageScreen && <ValidPage />}
      {inValidPageScreen && <InValidPage />}
    </>
  );
}

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;
