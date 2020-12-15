import React from "react";

function LastSchedule({ scores, data2 }) {
  return (
    <span>
      {data2[scores].map((e) => (
        <div className="scheldule__wrapper">
          <span>{e.dateEvent}</span>
          <span>{e.strTime}</span>
          <span>{e.strVenue}</span>
          <span>{e.strEvent}</span>
          <span>
            {e.intHomeScore} : {e.intAwayScore}
          </span>
          <span>
            <a href={e.strVideo} target="_blank">
              Video
            </a>
          </span>
        </div>
      ))}
    </span>
  );
}

export default LastSchedule;
