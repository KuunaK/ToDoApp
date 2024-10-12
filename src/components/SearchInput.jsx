import { Search } from "lucide-react";
import { useState } from "react";

const SearchInput = ({ handleSearch, handleFilterChange }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 px-12 justify-end">
      {/* Search Input */}
      <div className="sm:min-w-[20rem] flex justify-end">
        <div
          className={`relative transition-all duration-300 ${
            searchActive ? "w-full" : "sm:w-10"
          }`}
        >
          <span
            className="absolute top-1 left-1 cursor-pointer p-1"
            onClick={() => setSearchActive(!searchActive)}
          >
            <Search className="text-purple-300" />
          </span>
          <input
            type="text"
            placeholder="Search ToDo's..."
            className={`w-full bg-gradient-to-br from-stone-700 to-stone-700 via-stone-600 p-2  shadow-sm outline-none rounded-xl tracking-wide placeholder:text-stone-400 pl-10 ${
              searchActive ? "pl-10" : "sm:pl-8"
            }`}
            onChange={(e) => handleSearch(e.target.value)} // Pass search term to parent
          />
        </div>
      </div>

      <select
        onChange={(e) => handleFilterChange(e.target.value)} // Pass selected filter to parent
        className="bg-gradient-to-br from-stone-700 to-stone-700 via-stone-600 p-2 shadow-sm outline-none rounded-xl"
      >
        <option value="all" className="bg-stone-900">
          All
        </option>
        <option value="done" className="bg-stone-900">
          Done
        </option>
        <option value="in-progress" className="bg-stone-900">
          In Progress
        </option>
      </select>
    </div>
  );
};

export default SearchInput;
