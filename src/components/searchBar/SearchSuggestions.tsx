import { fetchEndpoint } from "../../uitls";
import { useEffect, useState, useRef } from "react";

import Suggestion from "./Suggestion";

interface SearchSuggestionsProps {
  query: string;
}

const SearchSuggestions = ({ query }: SearchSuggestionsProps) => {
  const [results, setResults] = useState([]);
  const breedsList = useRef([]);

  useEffect(() => {
    (async () => {
      if (breedsList.current.length == 0) {
        breedsList.current = await fetchEndpoint("/dogs/breeds", "GET");
      }
      const sortedBreeds = breedsList.current
        .filter((breed: string) =>
          breed.toLowerCase().startsWith(query.toLowerCase()),
        )
        .sort((a: string, b: string) => a.localeCompare(b));
      setResults(sortedBreeds);
    })();
  }, [query]);

  return (
    <div>
      <ul>
        {results.slice(0, 5).map((breed: string, key: number) => (
          <Suggestion {...{ breed }} key={key} />
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestions;
