import React, { useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import MoviePhotos from "./MoviePhotos/MoviePhotos";
import MovieTabDetails from "./MovieTabDetails/MovieTabDetails";
import AfishaService from "../../../services/axios/index";

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
          <MoviePhotos images={images}/>
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
