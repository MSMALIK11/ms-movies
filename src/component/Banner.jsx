import React from "react";
import CardList from "./CardList";

import banner from "./images/banner-bg.jfif";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="top-banner-wraper">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="card">
              <div className="card-top-img">
                <img src={banner} alt="" />
                <div className="movies-shows">
                  <h1>
                    Unlimited movies , TV <br />
                    shows and more
                  </h1>
                  <p>
                    Watch anywhere. Cancel anytime. <br />
                    Ready to watch? Enter your email to create <br />
                    or restart your membership.
                  </p>
                  <div className="search-box">
                    <input type="text" placeholder="Email...." />
                    <button>
                      <Link
                        to="/trending"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Get Started
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardList />
    </>
  );
};

export default Banner;
