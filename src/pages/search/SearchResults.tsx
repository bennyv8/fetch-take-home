import { useContext, useEffect, useState, useRef } from "react";

import { FavoritesContext, SearchContext } from "../../contexts/index";
import { fetchEndpoint } from "../../uitls/index";
import { DogCard } from "../../components";

interface DogProps {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

const SearchResults = () => {
  const { params } = useContext(SearchContext);
  const allAvailableDogs = useRef([]);
  const [currDogs, setCurrDogs] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const lastIndex = currPage * 10;
  const firstIndex = lastIndex - 10;

  const handleNextClick = () => {
    setCurrPage(currPage + 1);
  };

  const handlePrevClick = () => {
    currPage > 1 ? setCurrPage(currPage - 1) : null;
  };

  useEffect(() => {
    (async () => {
      const { resultIds } = await fetchEndpoint(
        `/dogs/search?${params.toString()}`,
        "GET",
      );
      const dogsList = await fetchEndpoint(
        "/dogs",
        "POST",
        JSON.stringify(resultIds),
      );
      allAvailableDogs.current = dogsList;

      setCurrDogs(allAvailableDogs.current.slice(firstIndex, lastIndex));
    })();
  }, [params, firstIndex, lastIndex]);

  return (
    <>
      {currDogs.map((dog: DogProps, index) => {
        return <DogCard {...dog} key={index} />;
      })}
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
};

export default SearchResults;
