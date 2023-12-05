import { useState } from "react";

const useParams = () => {
  const [params, setParams] = useState(new URLSearchParams());

  const addParams = (breed: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.append("breed", breed);
    setParams(newParams);
  };

  return {
    params,
    addParams,
  };
};

export default useParams;
