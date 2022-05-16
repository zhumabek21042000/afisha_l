import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Poster from "./Poster";

const MovieEventSlider = (props) => {
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
              {/* <div>0</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div> */}

              {movieList.map((movie, index) => (
                <Link to={`/movie/${index}`}>
                  <Poster
                    rate={movie.rate}
                    title={movie.title}
                    image={movie.image}
                    genres={movie.genres}
                  />
                </Link>
              ))}

              {Array(settings.slidesToShow - movieList.length)
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
