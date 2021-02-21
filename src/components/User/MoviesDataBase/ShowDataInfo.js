import React, { useState } from "react";
import noPhoto from "../../../assets/not_available.png";
import prohibitSign from "../../../assets/prohibitSign.png";

function ShowDataInfo({ datas }) {
  const [textShow, setTextShow] = useState(false);
  const [arrowShow, setArrowShow] = useState(true);
  const [dataId, setDataId] = useState("");

  const handleMoreInfo = () => {
    setTextShow(true);
    setArrowShow(false);
    fetchDeep();
  };

  async function fetchDeep() {
    await fetch(
      `https://api.themoviedb.org/3/tv/${datas.id}?api_key=834b38bde83678813d5541bcdb78dead`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setDataId(data);
      })

      .catch((err) => console.log(err));
  }

  return (
    <>
      <h3 className="showData__title">{datas.name}</h3>
      <div className="showData__wrap">
        <div className="showData__img">
          {datas.poster_path === null ? (
            // eslint-disable-next-line
            <img
              src={noPhoto}
              style={{ width: "170px", height: "200px" }}
              alt="photo not available"
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`}
              style={{ width: "170px", height: "225px" }}
              alt="show posters"
            />
          )}
        </div>
        <div className="showData__info">
          <p>
            first air release: <span>{datas.first_air_date} </span>
          </p>
          <p>
            popularity: <span>{datas.popularity} </span>
          </p>
          <p>
            avg score:<span>{datas.vote_average} </span>
          </p>
          <p>
            vote:<span>{datas.vote_count} </span>
          </p>
          {arrowShow && (
            <p onClick={handleMoreInfo}>
              <i
                className="fas fa-angle-double-down fa-lg showData__arrowDown"
                style={{
                  margin: "0 auto",
                  cursor: "pointer",
                  display: "block",
                  width: "20px",
                  textAlign: "center",
                }}
              ></i>
            </p>
          )}
          {textShow && (
            <>
              <p>
                genres:
                {dataId &&
                  dataId.genres.map((el) => (
                    <span key={el.id}>{el.name},</span>
                  ))}
              </p>
              <p>
                season numbers: <span>{dataId.number_of_seasons}</span>
              </p>
              <p>
                episode numbers: <span>{dataId.number_of_episodes}</span>
              </p>
              <p>
                homepage:
                {!(dataId.homepage === "") ? (
                  <a
                    href={dataId && dataId.homepage}
                    target="_blank"
                    className="showData__homepage"
                    rel="noreferrer"
                  >
                    <span>click</span>
                  </a>
                ) : (
                  <img
                    src={prohibitSign}
                    style={{
                      width: "20px",
                      height: "20px",
                      paddingLeft: "7px",
                      paddingBottom: "3px",
                    }}
                    alt="prohibit sign"
                  />
                )}
              </p>
              <p>
                status: <span>{dataId.status} </span>
              </p>
            </>
          )}
        </div>
      </div>
      <div className="showData__describe">{datas.overview}</div>
    </>
  );
}

export default ShowDataInfo;
