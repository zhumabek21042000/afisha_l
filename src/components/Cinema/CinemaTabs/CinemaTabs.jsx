import React from "react";
import { Tab } from "semantic-ui-react";
import CinemaPhotos from "./CinemaPhotos/CinemaPhotos";
import CinemaImportance from "./CinemaImportantTab/CinemaImportance";
import CinemaAddInfo from "./CinemaAddInfo/CinemaAddInfo";
import CinemaInfo from "./CinemaInfo/CinemaInfo";
import CinemaSchedule from "./CinemaSchedule/CinemaSchedule";

function CinemaTabs(props) {
  const panes = [
    {
      menuItem: "Важное",
      render: () => (
        <Tab.Pane>
          <CinemaImportance details={props.description}></CinemaImportance>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Информация",
      render: () => (
        <Tab.Pane>
          <CinemaInfo details={props.description}></CinemaInfo>
        </Tab.Pane>
      ),
    },

    {
      menuItem: "Режим работы",
      render: () => (
        <Tab.Pane>
          <CinemaSchedule />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Доп.инфо",
      render: () => (
        <Tab.Pane>
          <CinemaAddInfo></CinemaAddInfo>
        </Tab.Pane>
      ),
    },
  ];
  return <Tab panes={panes} renderActiveOnly={true} />;
}

export default CinemaTabs;
