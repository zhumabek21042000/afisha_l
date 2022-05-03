import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Poster from "../../MovieEventSlider/Poster";

const MoviesSoon = (props) => {
  const [movieList, setMovieList] = useState(props.movie_list);
  // useEffect(() => {
  //   props.movie_list?.then(() => {
  //     setMovieList(props.movie_list);
  //   });
  // });
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
              {movieList.map((movie) => (
                <Poster
                  rate={movie.rate}
                  title={movie.title}
                  image={movie.image}
                  date={movie.date}
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

export default MoviesSoon;
