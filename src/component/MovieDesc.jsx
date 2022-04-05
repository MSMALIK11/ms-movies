import React from "react";

const MovieDesc = ({ movie }) => {
  return (
    <>
      <div className="movie-desc-wraper">
        <h1 className="movie-name">{movie.title}</h1>
        <div className="views">
          <span>
            <i className="bi bi-eye-fill me-2"></i>
            <span> 2m views</span>
          </span>
        </div>
        <p className="movie-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          minima harum, nemo possimus quibusdam odit ut qui excepturi hic quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          repellendus nostrum eaque eos voluptates impedit, itaque consequuntur?
        </p>
        <ul className="movie-ul">
          <li>
            <span>Language</span>
            <span>English</span>
          </li>
          <li>
            <span>Subtitles</span>
            <span>English</span>
          </li>
          <li>
            <span>Audio languages</span>
            <span>{movie.original_language}</span>
          </li>
          <li>
            <span>Genre</span>
            <span className="text-danger">Action</span>
          </li>
          <li>
            <span>Run Time </span>
            <span>1h 22mins </span>
          </li>
          <li>
            <span>Release Date</span>
            <span>{movie.release_date}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDesc;
