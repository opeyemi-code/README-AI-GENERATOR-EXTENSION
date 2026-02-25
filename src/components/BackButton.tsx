import React from "react";
import { ArrowLeft } from "lucide-react";

function BackButton({ handleClick }: { handleClick: () => void }) {
  return (
    <button
      type="button"
      className="text-sm text-gray-500 hover:text-black hover:cursor-pointer"
      onClick={handleClick}
    >
      <ArrowLeft className="inline mr-1 w-3" />
      Back
    </button>
  );
}

export default BackButton;
