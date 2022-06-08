import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
const article_list = [
  {
    title: "Absent Flame",
    photoUrl:
      "https://randomwordgenerator.com/img/picture-generator/57e0d5454b52ac14f1dc8460962e33791c3ad6e04e5074417d2e72d19f48c4_640.jpg",
  },
  {
    title: "The Splintered Game",
    photoUrl:
      "https://randomwordgenerator.com/img/picture-generator/57e3d14b4b5aa514f1dc8460962e33791c3ad6e04e507440702d79d39748cd_640.jpg",
  },
  {
    title: "Sasha and Tanya new season",
    photoUrl:
      "https://randomwordgenerator.com/img/picture-generator/54e7d7474856ad14f1dc8460962e33791c3ad6e04e507440742e7dd5954cc2_640.jpg",
  },
];
const ArticlesList = (props) => {
  const [articles, setArticles] = useState(
    props.articlesList ? props.articlesList : article_list
  );
  const style = {
    // width: "100%",
    textAlign: "center",
    background: "teal",
    maxWidth: "182px",
    minWidth: "182px",
    height: "91px",
    padding: "50px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    overflow: 1
    // indicators: true,
  };

  return (
    <div className="articles-slider">
      <Slide style={{ width: "100%" }} {...properties}>
        {articles.map((article) => (
          <div className="article-box">
            <div style={{ backgroundImage: `url(${article.photoUrl})` }}>
              {article.title}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ArticlesList;
