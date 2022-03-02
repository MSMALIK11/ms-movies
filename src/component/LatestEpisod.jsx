import React from "react";
import img from "./images/mortalcombat.jfif";

const LatestEpisod = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="container mt-4 latest-ep-wraper">
        <div className="episod-info">
          <h1 className="episod-title">THE HERO CAMP</h1>
          <h1 className="episode-sub mt-4">
            S1 E01 Lorem ipsum dolor sit amet.
          </h1>
          <p className="episode-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ad
            magnam possimus molestias vel rerum dignissimos praesentium iure
          </p>
          <ul className="setting-icon">
            <li>
              <span>
                <i className="bi bi-plus"></i>
              </span>
            </li>
            <li>
              <span>
                {" "}
                <i className="bi bi-heart-fill"></i>
              </span>
            </li>
            <li>
              <span>
                {" "}
                <i className="bi bi-share"></i>
              </span>
            </li>
          </ul>
        </div>

        <span className="line mt-4">
          <hr className="text-danger" />
        </span>
        <div className="episode">
          <h1>Latest Episode</h1>

          <div className="row">
            {array.map((value) => {
              return (
                <>
                  <div className="col-sm-12 col-md-3 col-lg-3 mb-4">
                    <div className="card bg-dark">
                      <div className="card-img">
                        <img src={img} alt="" className="img-fluid" />
                      </div>
                      <div className="card-body">
                        <div className="realese-date">
                          <span>11 Aug 2022</span>
                          <span className="text-danger">30m</span>
                        </div>
                        <h1>Lorem ipsum dolor sit.....</h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestEpisod;
