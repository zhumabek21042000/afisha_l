import React, { useEffect, useState } from "react";
import MoviesSoon from "./MoviesSoon";
import AfishaService from "../../../../services/axios";

const Index = () => {
  const [count, setCount] = useState();
  useEffect(() => {
    AfishaService.get_movies_soon().then((res) => {
      setCount(res.data.data);
    });
  }, []);
  return (
    <>
      <div className="d-flex align-center space-between mb-24">
        <a className="title link" href="/movies_list?filter=soon">
          Скоро в кино
        </a>
        <a className="link small text-primary" href="/movies_list?filter=soon">
          {/* Все {count ? count.length : 0} */}
        </a>
      </div>
      <MoviesSoon></MoviesSoon>
    </>
  );
};

export default Index;
