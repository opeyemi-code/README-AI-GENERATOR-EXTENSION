import { ThumbsUp } from "lucide-react";
import TextButton from "./TextButton";
import BackButton from "./BackButton";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function ValidPage() {
  const { setOnBoardingScreen, setValidPageScreen } = useContext(DataContext)!;
  return (
    <main className="p-5">
      <BackButton
        handleClick={() => {
          setValidPageScreen(false);
          setOnBoardingScreen(true);
        }}
      />
      <div className="my-5 flex flex-col items-center">
        <h1 className="bg-green-50 px-3.5 py-1.5 text-green-500 font-semibold text-xs border border-green-100 rounded-3xl">
          ✅ Assignment Detected
        </h1>
        <span className="my-10 bg-gray-100 p-10 rounded-full">
          <ThumbsUp className="text-green-500 w-20 h-20" />
        </span>
        <TextButton
          text="Generate README ✨"
          className="w-60 h-13 text-sm font-semibold bg-indigo-600 text-white py-4 mt-3 rounded-3xl transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700 hover:cursor-pointer focus:ring-1 focus:ring-indigo-500 focus:ring-inset"
        />
      </div>
    </main>
  );
}

export default ValidPage;
