import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { Grid, Divider, List } from "semantic-ui-react";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
import AfishaService from "../../../services/axios";
const news_list = [
  {
    id: 1,
    title: "Absent Flame",
    date: "31.02.2022",
  },
  {
    id: 2,
    title: "The Splintered Game",
    date: "12.03.2022",
  },
  {
    id: 3,
    title: "Sasha and Tanya new season",
    date: "18.05.2022",
  },
];
const NewsList = (props) => {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    AfishaService.get_news().then((res) => {
      setNewsList(res.data.data);
    });
  }, []);

  return (
    <Grid style={{ boxSizing: "border-box", margin: "0" }} columns={2}>
      <Grid.Row>
        <Grid.Column>
          <h2>Кинособытия</h2>
          <Divider />
          <span>Нет данных</span>
        </Grid.Column>
        <Grid.Column>
          <h2>Новости</h2>
          <List celled>
            {newsList &&
              newsList.map((news) => (
                <List.Item style={{ padding: "20px 0px" }}>
                  <List.Content>
                    <Link to={`/news/${news.id ? news.id : 0}`}>
                      <List.Header>
                        <p className="news-title">
                          {news.title ? news.title : "---"}
                        </p>
                      </List.Header>
                    </Link>

                    <span style={{ color: "rgb(176,176,170)" }}>
                      {" "}
                      {news.created_at ? news.create_at : "---"}
                    </span>
                  </List.Content>
                </List.Item>
              ))}
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NewsList;
