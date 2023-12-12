import { MouseEvent, useContext } from "react";
import { SearchContext } from "../../contexts";

interface SuggestionProps {
  breed: string;
}

const Suggestion = ({ breed }: SuggestionProps) => {
  const { addParams } = useContext(SearchContext);

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addParams("breeds", breed);
  };

  return <li onClick={handleClick}>{breed}</li>;
};

export default Suggestion;
