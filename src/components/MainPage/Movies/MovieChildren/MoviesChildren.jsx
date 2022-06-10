import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Poster from "../../MovieEventSlider/Poster";
import AfishaService from "../../../../services/axios";

const MoviesChildren = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    AfishaService.get_movies_kids().then((res) => {
      setMovieList(res.data.data);
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: movieList.length % 6,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container mb-42">
      <div className="slider">
        <div className="slider-items-wrapper">
          <div className="slider-items">
            <Slider {...settings}>
              {movieList &&
                movieList.map((movie) => (
                  <Poster
                    rate={movie.movie_rate}
                    title={movie.name}
                    image={movie.logo_image}
                    genres={movie.genres}
                  />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesChildren;
