import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";
import "./style.css";
import AfishaService from "../../../../services/axios/index";

const MovieTabDetails = () => {
  const params = useParams();
  const [production, setProduction] = useState();
  const [premiere, setPremiere] = useState();
  const [ageRating, setAgeRating] = useState();
  const [duration, setDuration] = useState();
  const [producer, setProducer] = useState();
  const [actors, setActors] = useState();
  useEffect(() => {
    AfishaService.getMovieById(params.id).then((res) => {
      setProduction(res.data.detail.countries);
      setPremiere(res.data.detail.premiere_date_kz);
      setAgeRating(res.data.detail.age_rating);
      setDuration(res.data.detail.duration);
      setProducer(res.data.detail.producer);
      setActors(res.data.detail.casts);
    });
  }, []);
  return (
    <Segment>
      <Grid columns={3}>
        <Grid.Column className="black-border">
          <div className="about-movie-desc">
            <strong>Производство: </strong>
            {production &&
              production.map((pr) => {
                return <span>{pr ? pr : " --- "}</span>;
              })}
          </div>
          <div className="about-movie-desc">
            <strong>Премьера в РК: </strong>
            {premiere ? premiere : " --- "}
          </div>
          <div className="about-movie-desc">
            <strong>Возрастной рейтинг: </strong>
            {ageRating ? ageRating : " --- "}+
          </div>
          <div className="about-movie-desc">
            <strong>Продолжительность: </strong>
            {duration ? duration : " --- "} минут
          </div>
        </Grid.Column>
        <Grid.Column className="black-border">
          <div className="about-movie-desc">
            <strong>Режиссер: </strong>
            {producer ? producer.full_name : "---"}
          </div>
        </Grid.Column>
        <Grid.Column className="black-border">
          <div className="about-movie-desc">
            <strong>В ролях: </strong>
            {actors &&
              actors.map((act) => {
                return (
                  <li className="about-movie-actors">* {act.full_name}</li>
                );
              })}
          </div>
          <div className="about-movie-actors"></div>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default MovieTabDetails;
