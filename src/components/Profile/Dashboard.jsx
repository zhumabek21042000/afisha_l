import React from "react";
import { Image, List, Grid } from "semantic-ui-react";

const Dashboard = ({ username }) => {
  return (
    <>
      
        <List horizontal style={{ justifyContent: "space-between" }}>
          <List.Item>
            <List.Content>Мои билеты</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>Хочу посетить</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>Мои места</List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
            />
            <List.Content>
              <List.Header>{username}</List.Header>
              Настройки
            </List.Content>
          </List.Item>
        </List>
     
      <hr />
    </>
  );
};

export default Dashboard;
