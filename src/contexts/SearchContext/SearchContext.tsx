import { createContext } from "react";
import { PropsWithChildren } from "react";

import useParams from "./useParams";

interface SearchProvider extends PropsWithChildren {}

interface SearchContextValueProps {
  params: URLSearchParams;
  addParams: (key: string, value: string) => void;
}

//default values
const SearchContext = createContext<SearchContextValueProps>({
  params: new URLSearchParams(),
  addParams: () => {
    console.log("out of scope");
  },
});

const SearchProvider = ({ children }: SearchProvider) => {
  const contextValue = useParams();

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
