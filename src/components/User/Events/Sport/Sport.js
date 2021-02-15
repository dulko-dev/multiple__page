import React, { useEffect, useState } from "react";
import UserNav from "../../UserNav";
import LastSchedule from "./LastSchedule";
import { leagueInfo } from "./leagueInfo";
import ButtonsLeague from "./ButtonsLeague";

function Sport() {
  const [data2, setData2] = useState([]);
  const [buttonClick, setButtonClick] = useState(4328);

  useEffect(() => {
    const abortControl = new AbortController();
    const getLastSchedule = async () => {
      await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${buttonClick}`,
        { signal: abortControl.signal }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((response) => {
          setData2(response);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch abort");
          } else {
            console.log(err);
          }
        });
    };
    getLastSchedule();

    return () => abortControl.abort();
  }, [buttonClick]);

  return (
    <>
      <UserNav />
      <div className="sport">
        <div className="sport__buttons">
          <ButtonsLeague
            setButtonClick={setButtonClick}
            leagueInfo={leagueInfo}
          />
        </div>
        {Object.values(data2).map((e, index) => (
          <h3 className="sport__title" key={index}>
            {Object.values(e)[0].strLeague}
          </h3>
        ))}
        <div className="sport__scoresWrapper">
          <div>
            {Object.keys(data2).map((scores, index) => (
              <LastSchedule scores={scores} data2={data2} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sport;
