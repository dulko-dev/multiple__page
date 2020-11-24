import React from "react";

function Applications() {
  return (
    <div className="applications">
      <div className="applications__blockbuster">
        <div className="app__common app__todo">Your actually list</div>
        <div className="app__common app__info">information </div>
        {/* news / music events(ticketmaster) / movies and serial /books */}
        <div className="app__common app__weather">weather</div>
        <div className="app__common app__fun">entertainment </div>
        {/* - 9gag / quiz */}
        <div className="app__common app__calculator">calulcator</div>
        {/* - financial / healthy */}
      </div>
    </div>
  );
}

export default Applications;
