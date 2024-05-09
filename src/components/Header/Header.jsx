import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="bg-orange-500 px-5 py-2 flex justify-between items-center">
      <div className="flex items-center gap-5">
        {/* logo */}
        <div className="logo-font cursor-pointer">DLRBD.COM</div>

        {/* navs button */}
        <div className="relative">
          <ul className="flex items-center gap-3">
            <li className="relative">
              <button
                className="focus:outline-none"
                onClick={() => setDropdown(!dropdown)}
              >
                Movies
              </button>
              {dropdown && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Action
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Comedy
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Drama
                  </li>
                </ul>
              )}
            </li>
            <li>Genres</li>
            <li>Special Categories</li>
          </ul>
        </div>
      </div>

      {/* search bar */}
      <SearchBar />
    </nav>
  );
};

export default Header;
