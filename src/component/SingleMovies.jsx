import React, { useEffect, useState } from "react";
import { getAllMovies } from "./Api/api";
// import img1 from "./images/mortalcombat.jfif";
// import img from "./images/mortal-big.jfif";
// import { Link } from "react-router-dom";
import MovieDesc from "./MovieDesc";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const SingleMovies = () => {
  const [movies, setMovies] = useState([]);

  const param = useParams();
  const navigate = useNavigate();
  let { id } = param;

  let page = 1;
  useEffect(() => {
    const fetchAllMovies = async () => {
      const { results } = await getAllMovies(page);
      console.log("result", results);
      if (results) {
        const getCurrntMovies = results.filter((movie) => movie.id == id);
        if (getCurrntMovies) {
          setMovies(getCurrntMovies[0]);
        }
      }
    };
    fetchAllMovies();
  }, [id, page]);

  return (
    <>
      {movies ? (
        <div className="row mt-4 movie-details">
          <div className="col-sm-12">
            <div className="details-banner">
              <div className="card shadow">
                <span className="overlay"></span>
                <img
                  // src={img}
                  src={`https://image.tmdb.org/t/p/w200/${movies.backdrop_path}`}
                  // src={img}
                  alt=""
                  className="card-img-top"
                />
                <div className="single-m-flex  movie-card-row ">
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
                    // src={img1}
                    alt=""
                    className="card-img-top"
                  />

                  <div className="movie-info-wraper">
                    <h1>{movies.title}</h1>
                    <div className="movie-info">
                      <span className="bg dark">R</span>
                      <span>29/10/2021(CA)</span>
                      <h5>: Action,Mystery : 1h 39m</h5>
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

                    <button
                      className="mt-5 ms-4  watch-now-btn"
                      onClick={() => navigate("/playlist", { state: movies })}
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MovieDesc movie={movies} />
        </div>
      ) : (
        "Loadin..."
      )}
    </>
  );
};

export default SingleMovies;
