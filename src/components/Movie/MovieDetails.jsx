import React, { useState } from "react";
import "./style.css";
import YoutubeEmbed from "./Video/YoutubeEmbed";
import { AiFillStar } from "react-icons/ai/index";

import { Tab } from "semantic-ui-react";
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
const panes = [
  {
    menuItem: "Tab 1",
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  },
  { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];
const Tabs = () => <Tab panes={panes} renderActiveOnly={false} />;
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
        <div className="movie-top" style={{ boxSizing: "border-box" }}>
          <div className="movie-group">
            <div className="movie-video">
              <YoutubeEmbed id="QXcXTcGMz7g"></YoutubeEmbed>
            </div>
          </div>
          <div className="about-movie-statistics">
            <div className="d-flex space-between align-top">
              <div>
                <div className="title">Бука. Мое любимое чудище</div>
                <div className="about-movie-hint-text bold pt-5">
                  /Buka. Moyo lyubimoe chudische
                </div>
                <div className="about-movie-hint-text pt-10">
                  мультфильм, приключения, фэнтези, семейный
                </div>
              </div>
            </div>
            <div className="d-flex align-center mt-24 mb-68">
              <div
                style={{
                  cursor: "pointer",
                  width: "30px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="21"
                  height="28"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-width="2"
                    stroke="#FF005D"
                    d="M1.5103 19.9218L1.47767 19.9485L1.47515 19.951C1.39652 19.9978 1.28096 20.0171 1.1395 19.9598C1.0598 19.9193 0.999908 19.8245 0.999908 19.7319V2.02899C0.999908 1.49372 1.46455 1 2.09141 1H13.9084C14.5353 1 14.9999 1.49372 14.9999 2.02899V19.7065C14.9999 19.8021 14.9361 19.9 14.8526 19.9381L14.8171 19.9543L14.783 19.9732C14.7698 19.9806 14.7511 19.9883 14.7298 19.9938C14.7197 19.9964 14.7108 19.9981 14.7036 19.999C14.7011 19.9994 14.699 19.9996 14.6973 19.9997C14.6942 20 14.6927 20 14.6927 20C14.6457 20 14.5825 19.9846 14.5199 19.9467L14.4895 19.9218L8.63331 15.1283L7.99991 14.6099L7.36651 15.1283L1.5103 19.9218Z"
                  ></path>
                </svg>
              </div>
              <div
                style={{ width: "56px" }}
                className="about-movie-btn-caption"
              >
                Хочу посетить
              </div>
            </div>
            <div className="d-flex py-8">
              <div className="rating ">
                <div className="rating-stars">
                  <AiFillStar />
                </div>
              </div>
            </div>
            <div className="d-flex space-between" style={{ maxWidth: "220px" }}>
              <div className="about-movie-hint-text">20 голосов</div>
            </div>
            <div className="d-flex py-24">
              <div className="about-movie-statistic kino-kz">
                <div>5.5</div>
                <span>Kino.kz</span>
              </div>
              <div className="about-movie-statistic kinopoisk">
                <div>6.1</div>
                <span>КиноПоиск</span>
              </div>
            </div>
          </div>
          <div className="tabs">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
