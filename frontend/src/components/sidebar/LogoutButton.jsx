import React from "react";
import { GiExitDoor } from "react-icons/gi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto absolute bottom-2 left-4 flex flex-row">
      {!loading ? (
        <button
          onClick={logout}
          className="flex items-center justify-center px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-sm transition-all duration-300 ease-in-out"
        >
          <GiExitDoor className="w-4 h-4 mr-1" />
          <span className="font-semibold text-sm">Logout</span>
        </button>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
