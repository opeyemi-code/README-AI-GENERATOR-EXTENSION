import { CircleQuestionMark } from "lucide-react";
import BackButton from "./BackButton";
import DataContext from "../context/DataContext";

function InValidPage() {
  const { setOnBoardingScreen, setInValidPageScreen } =
    useContext(DataContext)!;

  return (
    <main className="px-5 py-10 flex flex-col items-center space-y-2">
      <BackButton
        handleClick={() => {
          setInValidPageScreen(false);
          setOnBoardingScreen(true);
        }}
      />
      <span className="bg-green-50 p-10 rounded-full">
        <CircleQuestionMark className="w-20 h-20 text-red-400" />
      </span>
      <h1 className="text-base text-slate-900 leading-6 font-bold">
        Hmm, this doesn't look right 🤔
      </h1>
      <p className="text-center w-64.5 text-gray-600 text-xs leading-5.5">
        Navigate to a Canvas assignment page and I'll help you generate a
        README!
      </p>

      <div className="flex gap-3 w-78 text-[0.6375rem] bg-white border-2 border-[#E8DDD3] border-dotted rounded-lg px-8 py-5 my-3">
        <h2 className="w-14 text-slate-900 font-bold">💡 Tip:</h2>
        <p className="text-gray-500 leading-4.75">
          {" "}
          Look for pages with assignment details, rubrics, or project
          descriptions
        </p>
      </div>
    </main>
  );
}

export default InValidPage;
