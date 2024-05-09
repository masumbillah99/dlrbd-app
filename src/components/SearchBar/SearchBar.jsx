import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="w-[250px] px-4 py-1 rounded-md outline-none bg-gray-100"
      />
      <button className="absolute right-0 top-0 h-full px-3 flex items-center bg-gray-100 rounded-md">
        <FaSearch className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  );
};

export default SearchBar;
