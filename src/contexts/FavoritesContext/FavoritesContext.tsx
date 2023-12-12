import { createContext } from "react";
import { PropsWithChildren } from "react";

import useFavorites from "./useFavorites";

interface FavoritesProvider extends PropsWithChildren {}

interface FavoritesContextValueProps {
  addFavorites: (dogId: string) => void;
  removeFavorites: (dogId: string) => void;
  favoritesList: Set<string>;
}

//default values
const FavoritesContext = createContext<FavoritesContextValueProps>({
  addFavorites: () => {},
  removeFavorites: () => {},
  favoritesList: new Set(),
});

const FavoritesProvider = ({ children }: FavoritesProvider) => {
  const contextValue = useFavorites();

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };
