import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const res =  await fetch(url);
    const json = await res.json();
    setData(json.data);

  }, [url]);

  return [data];
};

export default useFetch;