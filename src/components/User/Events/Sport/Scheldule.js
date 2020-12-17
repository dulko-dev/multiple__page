import React from "react";

function Scheldule({ element, data }) {
  return (
    <table>
      <caption>Next 15 matches</caption>
      <thead>
        <tr>
          <th>Date Event</th>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        {data[element].map((e) => (
          <tr key={e.idEvent}>
            <td>{e.dateEvent}</td>
            <td>{e.strTime} GMT</td>
            <td>{e.strEvent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Scheldule;
