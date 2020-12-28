import React from "react";

function MovieData({ movie }) {
  return (
    <div>
      <p>{movie.overview}</p>
      <p>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
      </p>
    </div>
  );
}

export default MovieData;
