import { SearchProvider } from "../../contexts/index";
import SearchResults from "./SearchResults.tsx";
import SearchHeader from "./SearchHeader.tsx";

const SearchPage = () => {
  return (
    <div>
      <SearchProvider>
        <h1>Find Dogs</h1>
        <SearchHeader />
        <SearchResults />
      </SearchProvider>
    </div>
  );
};

export default SearchPage;
