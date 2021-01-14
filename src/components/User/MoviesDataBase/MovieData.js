import React, { useState } from "react";

function MovieData({ movie, API_KEY }) {
  const [data, setData] = useState([]);

  const idFetch = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  idFetch();
  console.log(data);
  return (
    <div className="movieData">
      <div className="movieData__img">
        <img
          alt="movie title"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          style={{ width: "120px", height: "150px" }}
        />
      </div>
      <div className="movieData__info">
        <h4>
          {movie.title} ({movie.release_date})
        </h4>
      </div>
    </div>
  );
}

export default MovieData;
