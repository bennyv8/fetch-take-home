interface SuggestionProps {
  breed: string;
}

const Suggestion = ({ breed }: SuggestionProps) => {
  return <li>{breed}</li>;
};

export default Suggestion;
