import React from "react";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";
import "./style.css";

const MovieTabDetails = (props) => (
  <Segment>
    <Grid columns={3}>
      <Grid.Column className="black-border">
        <div className="about-movie-desc">
          <strong>Производство: </strong> dsds
        </div>
        <div className="about-movie-desc">
          <strong>Премьера в РК: </strong> Grid
        </div>
        <div className="about-movie-desc">
          <strong>Возрастной рейтинг: </strong> 434324
        </div>
        <div className="about-movie-desc">
          <strong>Продолжительность: </strong> 2222
        </div>
      </Grid.Column>
      <Grid.Column className="black-border">
        <div className="about-movie-desc">
          <strong>Режиссер: </strong>
        </div>
      </Grid.Column>
      <Grid.Column className="black-border">
        <div className="about-movie-desc">
          <strong>В ролях: </strong>
        </div>
        <div className="about-movie-actors">
          <li className="about-movie-actors">* Zhuma Gubash</li>
          <li className="about-movie-actors">* Sultanbek Serik</li>
        </div>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default MovieTabDetails;
