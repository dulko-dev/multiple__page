import React from "react";

function LastSchedule({ scores, data2 }) {
  return (
    <table>
      <caption>Past 15 matches</caption>
      <thead>
        <tr>
          <th>Date Event</th>
          <th>Time</th>
          <th>Event</th>
          <th>Result</th>
          <th>Video</th>
        </tr>
      </thead>
      <tbody>
        {data2[scores].map((e) => (
          <tr key={e.idEvent}>
            <td>{e.dateEvent}</td>
            <td>{e.strTime} GMT</td>
            <td>{e.strEvent}</td>
            <td>
              {e.intHomeScore} : {e.intAwayScore}
            </td>
            <td>
              <a href={e.strVideo} target="_blank">
                {e.strVideo ? "watch" : ""}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LastSchedule;
