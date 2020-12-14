import React, { useEffect, useState } from "react";
import UserNav from "../../UserNav";
import Articles from "./Articles";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=igBpkzksTJMnbjEuGgmgpzVyRz0Z2fEA"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setNews(response.results);
      });
  }, []);

  return (
    <>
      <UserNav />
      <div className="news">
        <h2>Most popular arcticles from 24h</h2>
        {news.map((element) => (
            <Articles element={element} key={element.id}/>
        ))}
      </div>
      ;
    </>
  );
}

export default News;
