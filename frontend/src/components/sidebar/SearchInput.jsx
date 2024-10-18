import React from "react";
import { TbUserSearch } from "react-icons/tb";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-[#4FC3F7] text-white">
        <TbUserSearch className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
