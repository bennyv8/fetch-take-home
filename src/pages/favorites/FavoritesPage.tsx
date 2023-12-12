import { useContext, useEffect, useState } from "react";

import { FavoritesContext } from "../../contexts";
import { DogCard, MatchModal } from "../../components";
import { fetchEndpoint } from "../../uitls";

interface DogProps {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

const FavoritesPage = () => {
  const { favoritesList } = useContext(FavoritesContext);
  const [favoritedDogs, setFavoritedDogs] = useState([]);

  const handleMatchClick = () => {
    fetchEndpoint("/dogs/match", "POST", JSON.stringify([...favoritesList]));
  };

  useEffect(() => {
    (async () => {
      const dogsList = await fetchEndpoint(
        "/dogs",
        "POST",
        JSON.stringify([...favoritesList]),
      );
      setFavoritedDogs(dogsList);
    })();
  }, [favoritesList]);

  return (
    <div>
      {favoritedDogs.map((dog: DogProps, index) => {
        return <DogCard {...dog} key={index} />;
      })}
      <button>Find Match!</button>
      <MatchModal />
    </div>
  );
};

export default FavoritesPage;
