import React, { useEffect, useState } from "react";
import UserNav from "../../UserNav";
import Articles from "./Articles";

function News() {
  const [news, setNews] = useState([]);
  const [waiting, setWaiting] = useState(true);

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
        setWaiting(false);
        setNews(response.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <UserNav />
      <div className="news">
        <h2>Most popular daily article</h2>
        {waiting ? (
          <p style={{textAlign:'center', fontSize:'5em'}}>...is loading...</p>
        ) : (
          <div className="news__wrapped">
            {news.map((element) => (
              <Articles element={element} key={element.id} />
            ))}
          </div>
        )}
      </div>
      ;
    </>
  );
}

export default News;
