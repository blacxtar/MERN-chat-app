import React from "react";
import { GiExitDoor } from "react-icons/gi";

const LogoutButton = () => {
  return (
    <div className="mt-auto flex flex-row">
      <GiExitDoor className="w-5 h-5 text-white cursor-pointer" />
      <p className="font-bold ml-1">Exit</p>
    </div>
  );
};

export default LogoutButton;
