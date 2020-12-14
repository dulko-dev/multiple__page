import React from "react";

function Scheldule({ element, data }) {
  return (
    <span>
      {data[element].map((e) => (
        <div className="scheldule__wrapper">
          <span>{e.dateEvent}</span>
          <span>{e.strTime}</span>
          <span>{e.strVenue}</span>
          <span>{e.strEvent}</span>
        </div>
      ))}
    </span>
  );
}

export default Scheldule;
