import React from "react";

function Articles({ element }) {
  return (
    <div key={element.id} className="articles">
      <h2 className='articles__title'>{element.title}</h2>
      <p>
        Section:{element.section}, Subsection:{element.subsection}
      </p>
      <a href={element.url} target="_blank">
        Read more...
      </a>
    </div>
  );
}

export default Articles;
