import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ArticlesList from "./Articles/ArticlesList";
import NewsList from "./NewsPage/NewsList";
import "./style.css";
const NewsMainPage = (props) => {
  const [articles, setArticles] = useState(
    props.articlesList ? props.articlesList : []
  );
  const [movieEvents, setMovieEvents] = useState(
    props.eventsList ? props.eventsList : []
  );
  return (
    <>
      <div className="container">
        <div className="articles-top">
          <div className="articles-top-data">Статьи</div>
          <Link to="/articles">Все статьи</Link>
        </div>
        <ArticlesList></ArticlesList>
        <NewsList></NewsList>
      </div>
    </>
  );
};

export default NewsMainPage;
