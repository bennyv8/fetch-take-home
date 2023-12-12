import { useState } from "react";

const useParams = () => {
  const [params, setParams] = useState(new URLSearchParams());

  const addParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.append(key, value);
    setParams(newParams);
  };

  return {
    params,
    addParams,
  };
};

export default useParams;
