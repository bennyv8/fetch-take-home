import { Input } from "../index";
import { useState, ChangeEvent } from "react";
import SearchSuggestions from "./SearchSuggestions";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div>
      <Input
        type="text"
        id="searchbar"
        value={query}
        onChange={handleInputChange}
        required={true}
        className="w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        placeholder="Search by Breed"
      />
      <SearchSuggestions {...{ query }} />
    </div>
  );
};

export default SearchBar;
