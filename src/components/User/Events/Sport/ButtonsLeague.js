import React from "react";

function ButtonsLeague({ setButtonClick, leagueInfo }) {
  return (
    <>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.englishPremier);
        }}
      >
        English Premier League
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.englishChampion);
        }}
      >
        English League Champions
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.englishLeagueOne);
        }}
      >
        English League 1
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.englishLeagueTwo);
        }}
      >
        English League 2
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.scottishPremier);
        }}
      >
        Scottish Premier League
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.scottishChampions);
        }}
      >
        Scottish Championship
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.germany);
        }}
      >
        German Bundesliga
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.germanB);
        }}
      >
        German 2 Bundesliga
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.italian);
        }}
      >
        Italian Serie A
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.italianB);
        }}
      >
        Italian Serie B
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.italianC);
        }}
      >
        Italian Serie C
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.spanish);
        }}
      >
        Spanish La Liga
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.spanishB);
        }}
      >
        La Liga B
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.french);
        }}
      >
        French Ligue 1
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.frenchB);
        }}
      >
        French Ligue 2
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.greek);
        }}
      >
        Greek Superleague Greece
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.dutch);
        }}
      >
        Dutch Eredivisie
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.belgian);
        }}
      >
        Belgian First Division A
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.turkish);
        }}
      >
        Turkish Süper Lig
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.danish);
        }}
      >
        Danish Superliga
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.portugues);
        }}
      >
        Portuguese Primeira Liga
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.polish);
        }}
      >
        Polish Ekstraklasa
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.ukrainian);
        }}
      >
        Ukrainian Premier League
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.russian);
        }}
      >
        Russian Football Premier League
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.norwegian);
        }}
      >
        Norwegian Eliteserien
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.welsh);
        }}
      >
        Welsh Premier League
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.brazilian);
        }}
      >
        Brazilian Serie A
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.brazilianB);
        }}
      >
        Brazilian Serie B
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.argentinian);
        }}
      >
        Argentinian Primera Division
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.nba);
        }}
      >
        NBA
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.spanishBasket);
        }}
      >
        Spanish Liga ACB
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.frenchBasket);
        }}
      >
        French LNB
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.italianBasket);
        }}
      >
        Italian Lega Basket
      </button>
    </>
  );
}

export default ButtonsLeague;
