import React from "react";
import img from "../images/slide-1.jpg";

import s2 from "../images/slide-2.jpg";
import s3 from "../images/slide-3.jpg";
const HomeSlider = () => {
  return (
    <>
      <div className="movie-carousel-wraper">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active "
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img src={img} class="d-block 1" alt="..." />
              <div className="carousel-caption ">
                <h2>
                  <span className="line"></span>High Rated
                </h2>
                <h1>avengers</h1>
                <div className="carousel-m-info">
                  <ul className="d-flex">
                    <li className="nav-item">
                      <p className="nav-link tv-mt">TV-MT</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link duration">30min</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link imdb-rating">
                        <span className="imdb-box">IMDB</span> 9.5
                      </p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link release-date">2022</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link genre">action</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={s2} class="" alt="..." />
              <div className="carousel-caption ">
                <h2>
                  <span className="line"></span>High Rated
                </h2>
                <h1>avengers</h1>
                <div className="carousel-m-info">
                  <ul className="d-flex">
                    <li className="nav-item">
                      <p className="nav-link tv-mt">TV-MT</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link duration">30min</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link imdb-rating">
                        <span className="imdb-box">IMDB</span> 9.5
                      </p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link release-date">2022</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link genre">action</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={s2} class="" alt="..." />
              <div class="carousel-caption">
                <h2>
                  <span className="line"></span>High Rated
                </h2>
                <h1>avengers</h1>
                <div className="carousel-m-info">
                  <ul className="d-flex">
                    <li className="nav-item">
                      <p className="nav-link tv-mt">TV-MT</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link duration">30min</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link imdb-rating">
                        <span className="imdb-box me-2">IMDB</span> 9.5
                      </p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link release-date">2022</p>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link genre">action</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
