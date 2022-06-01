import React from "react";
import MoviesSoon from "./MoviesSoon";

const index = (props) => {
  return (
    <>
      <div className="d-flex align-center space-between mb-24">
        <a className="title link" href="/movies_list?filter=soon">
          Скоро в кино
        </a>
        <a className="link small text-primary" href="/movies_list?filter=soon">
          Все 15
        </a>
      </div>
      <MoviesSoon movie_list={props.movie_list}></MoviesSoon>
    </>
  );
};

export default index;
