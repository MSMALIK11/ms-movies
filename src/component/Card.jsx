import React, { useState } from "react";
import Banner from "./Banner";
import CardList from "./CardList";
import { Link } from "react-router-dom";
const Card = ({ movies, loading, setPage, page, pageArr, setPageArr }) => {
  const [hover, setHover] = useState("");
  const [fvrt, setFvrt] = useState([]);

  const changePage = (e) => {
    e.preventDefault();
    let temparr = [];

    for (let i = 1; i <= pageArr.length + 1; i++) {
      temparr.push(i);
    }
    setPageArr([...temparr]);
    setPage(page + 1);
  };

  const changePrevPage = () => {
    if (page != 1) {
      setPage(page - 1);
    }
  };
  const handleBtn = (value) => {
    if (page != 1) {
      setPage(value);
    }
  };
  const addToFvrt = (movie) => {
    // console.log(movie);
    let oldData = JSON.parse(window.localStorage.getItem("movie-data") || "[]");

    if (fvrt.includes(movie.id)) {
      oldData = oldData.filter((m) => m.id !== movie.id);

      console.log("movie already wxist ");
    } else {
      oldData.push(movie);
    }
    window.localStorage.setItem("movie-data", JSON.stringify(oldData));
    console.log("ready to add fvrt ", oldData);
    let temp = oldData.map((movie) => movie.id);
    setFvrt([...temp]);
  };

  return (
    <>
      <div className="heading bg-dark">
        <h1 className="text-danger pt-4 text-center">Trending Movies</h1>
        {loading ? (
          "loading.."
        ) : (
          <div className="container movies-card-wraper">
            <div className="row">
              {movies.map((movie, index) => {
                return (
                  <>
                    <div
                      className="col-sm-6 col-md-6 col-lg-3 col-wraper"
                      key={index}
                    >
                      <div
                        className="card-wraper"
                        onMouseEnter={() => setHover(movie.id)}
                        onMouseLeave={() => setHover({ hover: "" })}
                      >
                        <div className="img-card-top">
                          <img
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                            alt=""
                            className="card-top-img img-fluid shadow "
                          />
                          {hover == movie.id && (
                            <button
                              className="add-to-fvrt"
                              onClick={() => addToFvrt(movie)}
                            >
                              {fvrt.includes(movie.id)
                                ? "REMOVE TO FVRT"
                                : "ADD TO FVRT"}
                            </button>
                          )}
                          <div className="movie-name">
                            <Link to={`/movie/${movie.id}`}>
                              <h1>{movie.title}</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        )}

        <nav aria-label="Page navigation example mb-4 ">
          <ul class="pagination justify-content-center ">
            <li class={`page-item  ${pageArr.length == 1 ? "disabled" : ""}`}>
              <a class="page-link" onClick={changePrevPage}>
                Previous
              </a>
            </li>
            {pageArr.map((item, index) => {
              return (
                <>
                  <li class="page-item" key={index}>
                    <a class="page-link" onClick={() => handleBtn(item)}>
                      {item}
                    </a>
                  </li>
                  ;
                </>
              );
            })}

            <li class="page-item">
              <a class="page-link" onClick={changePage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Card;
