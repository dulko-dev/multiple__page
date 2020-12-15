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
        English Champions League
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.englishLeagueOne);
        }}
      >
        English League One
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.englishLeagueTwo);
        }}
      >
        English League Two
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
        Scottish Champions League
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.germany);
        }}
      >
        Germany 2 Bundesliga
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.germanB);
        }}
      >
        Germany
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.italian);
        }}
      >
        Serie A
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.italianB);
        }}
      >
        Serie B
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.italianC);
        }}
      >
        Serie C
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.spanish);
        }}
      >
        La Liga
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
        Ligue 1
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.frenchB);
        }}
      >
        Ligue 2
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.greek);
        }}
      >
        Superleague Ellada
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.dutch);
        }}
      >
        Eredivisie
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.belgian);
        }}
      >
        Eerste klasse A
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.turkish);
        }}
      >
        Süper Lig
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.danish);
        }}
      >
        Superligaen
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.portugues);
        }}
      >
        Primeira Liga
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.polish);
        }}
      >
        Ekstraklasa
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.ukrainian);
        }}
      >
        Premier Liha
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.russian);
        }}
      >
        Priemjer-Liga
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.norwegian);
        }}
      >
        Eliteserien
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.welsh);
        }}
      >
        Cymru Premier
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.brazilian);
        }}
      >
        Campeonato Brasileiro Série A
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.brazilianB);
        }}
      >
        Campeonato Brasileiro Série B
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.argentinian);
        }}
      >
        Primera División
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
        Liga ACB
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.frenchBasket);
        }}
      >
        LNB Pro A
      </button>
      <button
        className="sport__button"
        onClick={() => {
          setButtonClick(leagueInfo.italianBasket);
        }}
      >
        Lega Basket Serie A
      </button>
    </>
  );
}

export default ButtonsLeague;
