import React from "react";
import ReactPlayer from "react-player";
import LatestEpisod from "./LatestEpisod";

const Playlist = () => {
  return (
    <>
      <div className="playlist-wraper">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=6ZfuNTqbHE8"
                className="react-player"
                width="100%"
                height="70rem"
                playing={false}
                muted={true}
                controls={true}
              />
            </div>
          </div>
        </div>
        <LatestEpisod />
      </div>
    </>
  );
};

export default Playlist;
