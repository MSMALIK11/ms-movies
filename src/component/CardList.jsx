import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllMovies } from "./Api/api";

const CardList = () => {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageArr, setPageArr] = useState([1]);
  const [page, setPage] = useState(1);
  // let page = 3;
  useEffect(() => {
    const fetchAllMovies = async () => {
      setLoading(true);
      const data = await getAllMovies(page);

      setMovies(data.results);
      setLoading(false);
    };
    fetchAllMovies();
  }, [page]);
  return (
    <Card
      movies={movies}
      loading={loading}
      pageArr={pageArr}
      page={page}
      setPage={setPage}
      setPageArr={setPageArr}
    />
  );
};

export default CardList;
