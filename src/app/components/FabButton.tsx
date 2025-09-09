import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import useScroll from "../hooks/useScroll";

const FabButton: React.FC = () => {
  const { redirectionHome } = useScroll();
  return (
    <button
      onClick={redirectionHome}
      className="fixed bottom-4 right-4 bg-black text-white font-semibold rounded-full w-12 h-12 flex items-center justify-center shadow-md"
    >
      <i className="fas fa-plus"></i>
      <ArrowUpCircleIcon className="h-6 w-6" strokeWidth={2} />
    </button>
  );
};

export default FabButton;
