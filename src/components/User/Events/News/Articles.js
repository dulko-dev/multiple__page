import React from "react";
import noPhoto from "../../../../assets/not_available.png";

function Articles({ element }) {
  return (
    <div className="articles">
    
      <h3 className="articles__title">"{element.title}"</h3>
      <a
        className="articles__text"
        href={element.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="articles__img">
          {element.media.length === 0 ? (
            <img
              src={noPhoto}
              style={{
                color: "wheat",
                width: "400px",
                height: "266px",
              }}
              alt="not available"
            />
          ) : (
            <>
              {element.media.map((media) => (
                <img
                  key={media}
                  style={{ width: "400px" }}
                  src={media["media-metadata"][2].url}
                  alt={media["media-metadata"].caption}
                />
              ))}
            </>
          )}
        </div>
        <p>{element.abstract}...Read more...</p>
      </a>
    </div>
  );
}

export default Articles;
