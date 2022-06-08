import React from "react";
import { Link } from "react-router-dom";
import { Image, List } from "semantic-ui-react";

const Dashboard = () => {
  return (
    <List
      selection
      verticalAlign="middle"
      style={{ background: "#DFE0EC", borderRadius: "9px", marginTop: "20px" }}
    >
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
        />
        <List.Content>
          <List.Header>
            <Link to="/adminpanel/cinemas">Cinemas</Link>
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
        />
        <List.Content>
          <List.Header>
            <Link to="/adminpanel/movies">Movies</Link>
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
        />
        <List.Content>
          <List.Header>
            <Link to="/adminpanel/news">News</Link>
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
        />
        <List.Content>
          <List.Header>
            <Link to="/adminpanel/articles">Articles</Link>
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
        />
        <List.Content>
          <List.Header>
            <Link to="/adminpanel/events">Events</Link>
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
        />
        <List.Content>
          <List.Header>
            <Link to="/adminpanel/halls">Halls</Link>
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
        />
        <List.Content>
          <List.Header>
            <Link to="/adminpanel/users">Users</Link>
          </List.Header>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default Dashboard;
