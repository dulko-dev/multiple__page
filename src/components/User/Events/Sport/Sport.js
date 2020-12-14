import React, { useEffect, useState } from "react";
import UserNav from "../../UserNav";
import Scheldule from "./Scheldule";
import { leagueInfo as leagueInfo } from "./leagueInfo";

function Sport() {
  const [data, setData] = useState([]);
  const [buttonClick, setButtonClick] = useState(4328);
  const [league, setLeague] = useState("English Premier League");
 

  useEffect(() => {
    fetch(
      `https://thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${buttonClick}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  }, [buttonClick]);

  console.log(data);
  return (
    <>
      <UserNav />
      <div className="sport">
        <div>
          <button
            onClick={() => {
              setButtonClick(leagueInfo[0].englishChampion);
              setLeague(leagueInfo[0].league);
            }}
          >
            English Champions League
          </button>
          <h3>{league}</h3>
          <div>
            {Object.keys(data).map((element) => (
              <Scheldule element={element} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sport;
