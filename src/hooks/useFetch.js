import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError(false);
      } catch (err) {
        setIsPending(true);
        setError(true);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};