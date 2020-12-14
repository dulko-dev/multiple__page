import React from "react";

function Articles({ element }) {
  return (
    <div className="articles">
      <h3 className="articles__title">{element.title}</h3>
      <div>
        {element.media.map((media) => (
          <img
            style={{ width: "400px" }}
            src={media["media-metadata"][2].url}
            alt={media["media-metadata"].caption}
          />
        ))}
      </div>
      <a className="articles__text" href={element.url} target="_blank">
        <p>
         {element.abstract}...Read more...
        </p>
      </a>
    </div>
  );
}

export default Articles;