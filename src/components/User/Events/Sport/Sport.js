import React, { useEffect, useState } from "react";
import UserNav from "../../UserNav";
import Scheldule from "./Scheldule";
import LastSchedule from "./LastSchedule";
import { leagueInfo as leagueInfo } from "./leagueInfo";
import ButtonsLeague from "./ButtonsLeague";

function Sport() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [buttonClick, setButtonClick] = useState(4328);

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

    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${buttonClick}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setData2(response);
      })
      .catch((err) => console.log(err));
  }, [buttonClick]);

  return (
    <>
      <UserNav />
      <div className="sport">
        <div>
          <ButtonsLeague
            setButtonClick={setButtonClick}
            leagueInfo={leagueInfo}
          />
          <h3 className='sport__title'>
            {Object.values(data).map((e) => Object.values(e)[0].strLeague)}
          </h3>
          <div className="sport__scoresWrapper">
            <div>
              {Object.keys(data).map((element) => (
                <Scheldule element={element} data={data} />
              ))}
            </div>
            <div>
              {Object.keys(data2).map((scores) => (
                <LastSchedule scores={scores} data2={data2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sport;
