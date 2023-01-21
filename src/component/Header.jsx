import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState(false);
  let name = "";
  return (
    <>
      <header className="header">
        <nav class="navbar navbar-expand-lg navbar-wraper">
          <div class="container-fluid navbar-head">
            <Link to="/" class="navbar-brand" href="#">
              {/* <img src={logo} alt="" /> */}
              <span className="ms me-2">ms</span>
              <span className="movies me-2">movies</span>
              <span className="hub me-2">hub</span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="bi bi-list fs-1 text-light"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarNav">
              <ul class="navbar-nav  ms-auto   py-sm-4">
                <li class="nav-item">
                  <Link to="/movie" class="nav-link" href="#">
                    Movies
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <select
                    className="nav-link"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Category</option>
                    <option value="1">
                      <Link to="/movie">Movies</Link>
                    </option>
                    <option value="2">Hollywood</option>
                    <option value="3">South Movies</option>
                  </select>
                </li> */}
                <li className="nav-item">
                  <Link to="/register" class="nav-link" href="#">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" class="nav-link" href="#">
                    Login
                  </Link>
                </li>
                <li className="nav-item" onClick={() => setSearch(!search)}>
                  <span className="nav-link">
                    <i className="bi bi-search"></i>
                  </span>
                </li>
                {search ? (
                  <li className="nav-item ">
                    <form
                      action=""
                      className={`nav-link ${search ? "activeSearch" : ""}`}
                    >
                      <input type="text" placeholder="Search Movies.." />
                      <i className="bi bi-search"></i>
                    </form>
                  </li>
                ) : (
                  ""
                )}
                <li class="nav-item">
                  <Link
                    to="/favourite"
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    <i className="bi bi-hearts fs-1 text-danger"></i>
                  </Link>
                </li>
                {name ? (
                  <li className="nav-item">
                    {" "}
                    <i className="bi bi-person-circle fs-1 nav-link"></i>{" "}
                  </li>
                ) : (
                  <li class="nav-item">
                    <Link
                      to="/favourite"
                      class="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      <button>Subscribe Now</button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
