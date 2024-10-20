import React, { useState } from "react";
import { TbUserSearch } from "react-icons/tb";
import useConversation from "../../zustand-store/useConversation";
import useGetConvo from "../../hooks/useGetConvo";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConvo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Enter more than 3 char to Search");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No match found");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-[#4FC3F7] text-white">
        <TbUserSearch className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
