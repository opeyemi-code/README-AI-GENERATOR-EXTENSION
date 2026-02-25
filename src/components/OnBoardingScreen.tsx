import { Eye, LockKeyhole } from "lucide-react";
import { useContext } from "react";
import TextButton from "./TextButton";
import DataContext from "../context/DataContext";
import BackButton from "./BackButton";

function OnBoardingScreen() {
  const {
    setHomeScreen,
    setOnBoardingScreen,
    setValidPageScreen,
    // setInValidPageScreen,
  } = useContext(DataContext)!;

  return (
    <main className="p-5">
      <BackButton
        handleClick={() => {
          setHomeScreen(true);
          setOnBoardingScreen(false);
        }}
      />
      <section className="py-10 flex flex-col justify-center items-center space-y-3">
        <span>
          <LockKeyhole className="text-indigo-500 w-20 h-20" />
        </span>
        <h1 className="text-slate-900 text-[17px] font-bold">
          Almost there! 🔑
        </h1>
        <p className="text-[#7A7289] text-[12px]">
          Add your OpenAI API key to unlock the magic
        </p>
        <form className="w-78">
          <label htmlFor="api-key" className="relative">
            <input
              className="px-4 py-3 text-sm leading-5 text-gray-400 bg-white block w-full border-[#B8A99E] border-2 rounded-lg focus:border-indigo-500 outline-0"
              type="password"
              name="api-key"
              id="api-key"
              placeholder="sk-..."
            />
            <Eye className="absolute top-3 -right-75 text-[#E8DDD3] hover:cursor-pointer hover:text-gray-500" />
          </label>
          <TextButton
            text="Save & Continue"
            className="w-full text-sm font-semibold bg-indigo-600 text-white py-4 mt-3 rounded-3xl transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700 hover:cursor-pointer focus:ring-1 focus:ring-indigo-500 focus:ring-inset"
            handleClick={() => {
              setOnBoardingScreen(false);
              setValidPageScreen(true);
              // setInValidPageScreen(true);
            }}
          />
        </form>

        <p className="text-[0.6875rem] leading-4 text-[#B8A99E]">
          <span className="mr-5">🔒</span>
          Your key is stored locally and never shared
        </p>
      </section>
    </main>
  );
}

export default OnBoardingScreen;
