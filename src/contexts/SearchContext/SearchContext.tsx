import { createContext } from "react";
import { PropsWithChildren } from "react";

import useParams from "./useParams";

interface SearchProvider extends PropsWithChildren {}

interface ContextValueProps {
  params: URLSearchParams;
  addParams: (breed: string) => void;
}

const SearchContext = createContext<ContextValueProps | null>(null);

const SearchProvider = ({ children }: SearchProvider) => {
  const contextValue = useParams();

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
