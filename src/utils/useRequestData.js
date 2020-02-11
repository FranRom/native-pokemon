import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequestData = (url, deps = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios(url.toString());

        setData(response);
      } catch (error) {
        console.log(error);
        setData(null);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, deps);

  return { isLoading, isError, data };
};

export default useRequestData;
