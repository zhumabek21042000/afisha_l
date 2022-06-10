import React, { useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import MovieTabDetails from "./MovieTabDetails/MovieTabDetails";
import AfishaService from "../../../services/axios/index";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const MoviePhotos = ({ imgs }) => {
  const [images] = imgs;

  const style = {
    // width: "100%",
    textAlign: "center",
    maxWidth: "182px",
    minWidth: "182px",
    height: "91px",
    padding: "20px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: imgs.length % 6,
    slidesToScroll: 1,
    autoplay: false,
    // indicators: true,
  };

  return (
    <div>
      <div>
        <Slide style={{ width: "100%" }} {...properties}>
          {imgs &&
            imgs.map((img) => (
              <img width={200} height={200} src={img.image_path}
              style={{marginLeft: ""}}
              />
            ))}
        </Slide>
      </div>
    </div>
  );
};

function MovieTabs(props) {
  const [description, setDescription] = useState();
  const [images, setImages] = useState();
  const [production, setProduction] = useState();
  const [premiere, setPremiere] = useState();
  const [ageRating, setAgeRating] = useState();
  const [duration, setDuration] = useState();
  const [producer, setProducer] = useState();
  const [actors, setActors] = useState();
  useEffect(() => {
    setDescription(props.details.description);
    setImages(props.details.images);
    setProduction(props.details.countries);
    setPremiere(props.details.premier_date_kz);
    setAgeRating(props.details.age_rating);
    setDuration(props.details.duration);
    setProducer(props.details.producer);
    setActors(props.details.casts);
  }, []);
  const panes = [
    {
      menuItem: "Описание",
      render: () => <Tab.Pane>{description}</Tab.Pane>,
    },
    {
      menuItem: "Кадры из фильма",
      render: () => (
        <Tab.Pane>
          <MoviePhotos imgs={images} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Детали фильма",
      render: () => (
        <Tab.Pane>
          <MovieTabDetails
            production={production}
            premiere={premiere}
            age_rating={ageRating}
            duration={duration}
            producer={producer}
            actors={actors}
          />
        </Tab.Pane>
      ),
    },
  ];
  return <Tab panes={panes} renderActiveOnly={true} />;
}

export default MovieTabs;
