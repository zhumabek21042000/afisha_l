import React from "react";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "auto",
        // position: "absolute",
        // width: "100%",
        // bottom: "0",
        // height: "50px",
      }}
    >
      <Segment
        style={{
          padding: "5em 0em",
        }}
      >
        <Container>
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header as="h4" content="About" />
                <List link>
                  <List.Item as="a">Afisha KZ</List.Item>
                  <List.Item as="a">Контакты</List.Item>
                  <List.Item as="a">Новости</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" content="Services" />
                <List link>
                  <List.Item as="a">Как пользоваться</List.Item>
                  <List.Item as="a">Частые Вопросы</List.Item>
                  <List.Item as="a">Договор</List.Item>
                  <List.Item as="a">Лучшие фильмы</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4">Данные сайта</Header>
                <p>Данный сайт разработан для учебной цели и не более.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};
export default Footer;
