import { useState, useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts";

interface DogCardProps {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

const DogCard = ({ id, img, name, age, zip_code, breed }: DogCardProps) => {
  const { addFavorites, removeFavorites, favoritesList } =
    useContext(FavoritesContext);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    !isChecked ? addFavorites(id) : removeFavorites(id);
  };

  useEffect(() => {
    setIsChecked(favoritesList.has(id));
  }, [favoritesList, id]);

  return (
    <div className={`p-4 ${isChecked ? "bg-yellow-300" : ""}`}>
      <label>
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleCheckBoxChange}
        />
        <img
          src={img}
          alt={`Adopt ${name}, a ${age}-year-old ${breed}. ${zip_code}. View adoption information.`}
        />
        <div>
          <h1>{name}</h1>
          <h2>{breed}</h2>
          <p>{age}</p>
          <p>{zip_code}</p>
        </div>
      </label>
    </div>
  );
};

export default DogCard;
