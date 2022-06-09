import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Poster from "./Poster";
import AfishaService from "../../../services/axios";

const MovieEventSlider = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    AfishaService.get_movies_now().then((res) => {
      setMovieList(res.data.data);
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container mb-42">
      <div className="slider">
        <div className="slider-items-wrapper">
          <div className="slider-items">
            <Slider {...settings}>
              {movieList &&
                movieList.map((movie, index) => (
                  <Link key={index} to={`/movie/${movie.id}`}>
                    <Poster
                      rate={movie.movie_rate}
                      title={movie.name}
                      image={movie.logo_image}
                      genres={movie.genres}
                    />
                  </Link>
                ))}

              {Array(settings.slidesToShow - movieList ? movieList.length : 0)
                .fill("")
                .map((s) => (
                  <div></div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieEventSlider;

// function MovieEventSlider() {

// }

// export default MovieEventSlider;
