import React, { useState } from "react";
import { Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CinemaListData = ({ cinemalist }) => {
  return (
    <List divided verticalAlign="middle">
      {cinemalist.length > 0 &&
        cinemalist.map((cinema) => {
          return (
            <List.Item as="a">
              <Image
                style={{ height: "50px", width: "60px" }}
                avatar
                src={"https://cdn.kino.kz/cinema/99/p223x267.jpg"}
              />
              <List.Content style={{ fontSize: "16px" }}>
                <Link to={"/cinema/" + cinema.id}>
                  {cinema.name} /{" "}
                  <span style={{ color: "#888" }}>{cinema.address}</span>
                </Link>
              </List.Content>
            </List.Item>
          );
        })}
    </List>
  );
};

export default CinemaListData;
