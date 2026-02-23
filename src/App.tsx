import { useContext } from "react";
import HomeScreen from "./components/HomeScreen";
import OnBoardingScreen from "./components/OnBoardingScreen";
import DataContext, { DataProvider } from "./context/DataContext";
import type { DataContextType } from "./types/models";

function AppContent() {
  const { homeScreen, onBoardingScreen } = useContext<DataContextType | null>(
    DataContext,
  )!;

  return (
    <>
      {homeScreen && <HomeScreen />}
      {onBoardingScreen && <OnBoardingScreen />}
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
