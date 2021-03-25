import React, { useState, useEffect } from "react";
import noPhoto from "../../../assets/not_available.png";

function PersonDataInfo({ datas, input }) {
  const [data, setData] = useState("");

  useEffect(() => {
    const abortFetch = new AbortController();
    async function fetchDeep() {
      await fetch(
        
        `https://api.themoviedb.org/3/person/${datas.id}?api_key=834b38bde83678813d5541bcdb78dead&language=en-US`,
        {
          signal: abortFetch.signal,
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }
    fetchDeep();
    return () => abortFetch.abort();
    // eslint-disable-next-line
  }, [input]);

  return (
    <>
      <h3 className="personData__title">{datas.name}</h3>
      <p
        style={{
          textTransform: "uppercase",
          color: "#fffcf9",
          fontSize: "0.7em",
          textAlign: "center",
          paddingBottom: "5px",
        }}
      >
        known for:
        {datas.known_for.map((movie) => (
          <span key={movie.id} style={{ color: "#d5ac4e", paddingLeft: "5px" }}>
            {movie.title}
          </span>
        ))}
      </p>
      <div className="personData__wrap">
        <div className="personData__img">
          {datas.profile_path === null ? (
            // eslint-disable-next-line
            <img
              src={noPhoto}
              style={{ width: "150px", height: "175px" }}
              alt="photo not available"
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${datas.profile_path}`}
              style={{ width: "150px", height: "175px" }}
              alt="movie posters"
            />
          )}
        </div>
        <div className="personData__info">
          {!(data.birthday === null) && (
            <p>
              birthday: <span> {datas && data.birthday} </span>
            </p>
          )}
          {!(data.place_of_birth === null) && (
            <p>
              birthday place: <span>{datas && data.place_of_birth}</span>
            </p>
          )}
          {!(data.deathday === null) && (
            <p>
              death: <span> {datas && data.deathday} </span>
            </p>
          )}
          <p>
            department: <span>{datas.known_for_department} </span>
          </p>
          <p>
            popularity: <span>{datas.popularity} </span>
          </p>
        </div>
      </div>
      <div>
        <div className="personData__describe">{datas && data.biography}</div>
      </div>
    </>
  );
}

export default PersonDataInfo;
