import React, { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(query, pageNum) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setPhotos([]);
  }, [query]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel;

    setIsLoading(true);
    setError(false);

    axios
      .get(`https://api.unsplash.com/search/photos?page=${pageNum}&query=${query}&client_id=${process.env.REACT_APP_UNPLASH_ACCESS_KEY}`, {
        cancelToken: new CancelToken((c) => (cancel = c))
      })
      .then((res) => {
        setPhotos((prev) => {
          return [...new Set([...prev, ...res.data.results])];
        });
        setHasMore(res.data.results.length > 0);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err);
      });

    return () => cancel();
  }, [query, pageNum]);

  return { isLoading, error, photos, hasMore };
}
