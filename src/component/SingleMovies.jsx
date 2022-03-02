import React, { useEffect, useState } from "react";
import { getAllMovies } from "./Api/api";
import img1 from "./images/mortalcombat.jfif";
import img from "./images/mortal-big.jfif";
import { Link } from "react-router-dom";
import MovieDesc from "./MovieDesc";

const SingleMovies = () => {
  const [movies, setMovies] = useState([]);
  const URL = "https://image.tmdb.org/t/p/w200/";
  let page = 1;
  useEffect(() => {
    const fetchAllMovies = async () => {
      const data = await getAllMovies(page);

      setMovies(data.results);
    };
    fetchAllMovies();
  }, []);

  return (
    <>
      <div className="row mt-4 movie-details">
        <div className="col-sm-12">
          <div className="details-banner">
            <div className="card shadow">
              <span className="overlay"></span>
              <img
                // src={img}
                // src={`https://image.tmdb.org/t/p/w200/${movies[2].backdrop_path}`}
                src={img}
                alt=""
                className="card-img-top"
              />
              <div className="single-m-flex  movie-card-row ">
                <img
                  // src={`https://image.tmdb.org/t/p/w200/${movies[2].poster_path}`}
                  src={img1}
                  alt=""
                  className="card-img-top"
                />

                <div className="movie-info-wraper">
                  <h1>Movie Title</h1>
                  <div className="movie-info">
                    <span className="bg dark">R</span>
                    <span>29/10/2021(CA)</span>
                    <h5>: Drama , Horror,Mystery : 1h 39m</h5>
                  </div>

                  <div className="movie-setting">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Add to list"
                    >
                      <i className="bi bi-list-task fs-4"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Mark as favourite"
                    >
                      <i className="bi bi-heart-fill fs-4"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Add to your watchlist"
                    >
                      <i className="bi bi-bookmark-heart fs-4"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Rate it"
                    >
                      <i className="bi bi-star-fill fs-5"></i>
                    </button>
                  </div>
                  <div className="watch-trailer">
                    <button>
                      {" "}
                      <i className="bi bi-play-circle-fill"></i>
                    </button>
                    <span>Play Trailer</span>
                  </div>
                  <Link to="/playlist">
                    <button className="mt-5 ms-4  watch-now-btn">
                      Watch Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MovieDesc movie={movies} />
      </div>
    </>
  );
};

export default SingleMovies;
