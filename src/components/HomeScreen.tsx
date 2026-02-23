import { FileText } from "lucide-react";
import TextButton from "./TextButton";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function HomeScreen() {
  const { setHomeScreen, setOnBoardingScreen } = useContext(DataContext)!;
  return (
    <main className="flex flex-col items-center justify-center space-y-3 h-full">
      <FileText className="w-13 h-17 text-indigo-600 mb-3" />
      <h1 className="text-[20.4px]">README Magic ✨</h1>
      <p className="max-w-70 text-center text-[12px] leading-6 text-gray-500">
        Transform your assignments into beautiful READMEs with a sprinkle of AI
        magic
      </p>
      <TextButton
        text="Get Started"
        className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-3xl font-semibold w-60 h-13 transition-all duration-200 hover:scale-[1.01] hover:bg-indigo-800 hover:cursor-pointer"
        handleClick={() => {
          setHomeScreen(false);
          setOnBoardingScreen(true);
        }}
      />
      <p className="text-[11px] text-[#B8A99E] lead-4">
        Takes less than a minute to set up
      </p>
    </main>
  );
}

export default HomeScreen;
