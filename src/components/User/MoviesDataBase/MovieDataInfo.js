import React from "react";
import noPhoto from "../../../assets/not_available.png";

function MovieDataInfo({ datas }) {
  console.log(datas);
  return (
    <>
      <h3 className="movieData__title">{datas.title}</h3>
      <div className="movieData__wrap">
        <div className='movieData__img'>
          {datas.poster_path === null ? (
            <img src={noPhoto} style={{ width: "175px", height: "225px" }} />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`}
              style={{ width: "175px", height: "225px" }}
              alt="movie posters"
            />
          )}
        </div>
        <div className="movieData__info">
          <p>
            release: <span>{datas.release_date} </span>
          </p>
          <p>
            popularity: <span>{datas.popularity} </span>
          </p>
          <p>
            vote:<span>{datas.vote_average} </span>
          </p>
          <p>
            count:<span>{datas.vote_count} </span>
          </p>
        </div>
      </div>
      <div className="movieData__describe">{datas.overview}</div>
    </>
  );
}

export default MovieDataInfo;
