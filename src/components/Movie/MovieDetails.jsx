import React, { useState } from "react";
import "./style.css";
import YoutubeEmbed from "./Video/YoutubeEmbed";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function MovieDetails(props) {
  const [name, setName] = useState("Ребята, це ГГ");
  const [englishName, setEnglishName] = useState(
    "We are ready for diploma defence"
  );
  const [genres, setGenres] = useState(["Hard", "Kill", "Horror"]);
  const [rate, setRate] = useState(9);
  const [ratedVoices, setRatedVoices] = useState(102);
  const [description, setDescription] = useState(
    "Поселившись в Грин Хилз, Соник стремится доказать, что у него есть все задатки настоящего героя. И геройское испытание не заставляет себя долго ждать: злодейский доктор Роботник вновь строит козни. На этот раз — с загадочным напарником Наклзом. Вместе они разыскивают бесценный изумруд, в котором заключены силы, способные уничтожать целые цивилизации. Соник объединяется с лисенком Тейлзом, чтобы отправиться в кругосветное путешествие и найти изумруд до того, как он попадет в плохие руки."
  );
  const [movieFrames, setMovieFrames] = useState([]);
  const [movieUrl, setMovieUrl] = useState();

  // here is movie details
  const [country, setCountry] = useState();
  const [premierDate, setPremierDate] = useState();
  const [ageRestriction, setAgeRestriction] = useState();
  const [producer, setProducer] = useState();
  const [actors, setActors] = useState([]);
  const [achievments, setAchievements] = useState([]);

  return (
    <div className="container">
      <div className="movie mt-32 mb-10">
        <div className="movie-top">
          <div className="movie-group">
            <div className="movie-video">
              <YoutubeEmbed id="QXcXTcGMz7g"></YoutubeEmbed>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
