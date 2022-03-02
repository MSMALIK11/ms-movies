import React, { useEffect, useState } from "react";

let genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
const Favourite = () => {
  const [movies, setMovies] = useState([]);
  const [geners, setGeners] = useState([]);
  const [currGenrs, setCurrGenrs] = useState("All Geners");
  const [filterMovie, setFilterMovie] = useState([]);

  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("movie-data") || []);
    // console.log("data", data);

    let temparr = [];
    data.forEach((movieObj) => {
      if (!temparr.includes(genreids[movieObj.genre_ids[0]])) {
        temparr.push(genreids[movieObj.genre_ids[0]]);
      }
    });

    temparr.unshift("All Geners");
    setGeners([...temparr]);
    setMovies([...data]);
  }, []);

  const handleGeners = (g) => {
    setCurrGenrs(g);
  };

  // let filterarr = [];
  // const filterArray = () => {
  //   if (currGenrs === "All Geners") {
  //     console.log("setmovie", movies);
  //     setFilterMovie(movies);
  //     setMovies(movies);
  //   } else {
  //     filterarr = movies.filter(
  //       (movieObj2) => genreids[movieObj2.genre_ids[0]] == currGenrs
  //     );
  //   }
  //   setMovies(filterarr);
  //   console.log("filter array", filterMovie);
  // };
  // useEffect(() => {
  //   filterArray();
  //   console.log("filter call");
  // }, [currGenrs]);

  // if (currGenrs === "All Geners") {
  //   setMovies(movies);
  // } else {
  //   filterarr = movies.filter(
  //     (movieObj) => genreids[movieObj.genre_ids[0]] == currGenrs
  //   );
  // }
  // let filterarr = [];
  // const changleGenrs = () => {
  //   if (currGenrs === "All Geners") {
  //     setMovies(movies);

  //     console.log("movies", movies);
  //   } else {
  //     filterarr = movies.filter(
  //       (movieObj) => genreids[movieObj.genre_ids[0]] == currGenrs
  //     );
  //   }

  //   console.log("filterarr", filterarr);
  // };
  return (
    <section>
      <div className="fvrt-wraper">
        <div className="row fvrt-row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <ul class="list-group all-genres">
              {geners.map((g) =>
                currGenrs == g ? (
                  <li
                    class="list-group-item   text-light text-bold fs-3"
                    style={{ background: "#111", fontWeight: "800" }}
                  >
                    {g}
                  </li>
                ) : (
                  <li
                    class="list-group-item fs-4 bg-dark text-light"
                    onClick={() => handleGeners(g)}
                  >
                    {g}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="fvrt-search-box">
              <input type="text" placeholder="Search movies..." />
              <button>
                <i className="bi bi-search"></i>
              </button>
            </div>
            <div className="row mt-4">
              {movies.map((movie, index) => {
                return (
                  <>
                    <div className="card mb-4 p-0">
                      <div className="fvrt-movie-card d-flex">
                        <img
                          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                          alt=""
                        />
                        <div className="card-body">
                          <h3 className="card-title mb-4">
                            {movie.media_type == "tv"
                              ? movie.name
                              : movie.title}
                          </h3>
                          <h5 className="genere">
                            {genreids[movie.genre_ids[0]]}
                          </h5>
                          <h5
                            className="genere ms-4 "
                            style={{ background: "palevioletred" }}
                          >
                            {movie.media_type}
                          </h5>
                          <h5>{movie.popularit}</h5>
                          <h5 className="card-text  text-muted mt-4">
                            {movie.release_date}
                          </h5>

                          <div className="rating text-warning">
                            Rating <span>{movie.vote_average}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourite;
