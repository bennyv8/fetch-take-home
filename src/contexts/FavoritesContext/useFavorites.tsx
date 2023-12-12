import { useState, useEffect } from "react";

const useFavorites = () => {
  const [favoritesList, setFavoritesList] = useState(() => {
    const storedFavorites = window.sessionStorage.getItem("favorites");
    return new Set<string>(JSON.parse(storedFavorites || "[]"));
  });

  useEffect(() => {
    window.sessionStorage.setItem(
      "favorites",
      JSON.stringify([...favoritesList]),
    );
  }, [favoritesList]);

  const addFavorites = (dogId: string) => {
    console.log("dog id being added", dogId);
    setFavoritesList(
      (prevFavoritesList) => new Set([...prevFavoritesList, dogId]),
    );
  };

  const removeFavorites = (dogId: string) => {
    console.log("dog id being removed", dogId);
    setFavoritesList((prevFavoritesList) => {
      const newFavoritesList = new Set(prevFavoritesList);
      newFavoritesList.delete(dogId);
      return newFavoritesList;
    });
  };

  return {
    addFavorites,
    removeFavorites,
    favoritesList,
  };
};

export default useFavorites;
