import React from "react";
import { Tab } from "semantic-ui-react";
import MoviePhotos from "./MoviePhotos/MoviePhotos";
import MovieTabDetails from "./MovieTabDetails/MovieTabDetails";

function MovieTabs(props) {
  const panes = [
    {
      menuItem: "Описание",
      render: () => <Tab.Pane>{props.description}</Tab.Pane>,
    },
    {
      menuItem: "Кадры из фильма",
      render: () => (
        <Tab.Pane>
          <MoviePhotos />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Детали фильма",
      render: () => (
        <Tab.Pane>
          <MovieTabDetails />
        </Tab.Pane>
      ),
    },
    { menuItem: "Награды", render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
  ];
  return <Tab panes={panes} renderActiveOnly={true} />;
}

export default MovieTabs;
