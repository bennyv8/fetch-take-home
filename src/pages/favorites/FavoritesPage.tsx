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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matchedDog, setMatchedDog] = useState<DogProps[]>([]);

  const handleMatchClick = async () => {
    try {
      const { match } = await fetchEndpoint(
        "/dogs/match",
        "POST",
        JSON.stringify([...favoritesList]),
      );
      const dogMatch = await fetchEndpoint(
        "/dogs/",
        "POST",
        JSON.stringify([match]),
      );
      setMatchedDog(dogMatch);
      setIsModalOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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
      <button onClick={handleMatchClick}>Find Match!</button>
      <MatchModal isOpen={isModalOpen} onClose={handleModalClose}>
        <DogCard {...matchedDog[0]} />
      </MatchModal>
    </div>
  );
};

export default FavoritesPage;
