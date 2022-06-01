import React from "react";
import CinemaList from "../CinemaList";
import CinemaTableData from "../CinemaTableData/CinemaTableData";
import SearchForm from "./SearchForm";
const ccss = [
  {
    id: "1",
    name: "Dostyk 12",
    address: "SOme address",
    photo_url: "https://cdn.kino.kz/cinema/91/p223x267.png",
  },
  {
    id: "2",
    name: "Zipulya",
    address: "6 Brooklyn Street",
    photo_url: "https://cdn.kino.kz/cinema/91/p223x267.png",
  },
  {
    id: "3",
    name: "Gachi malchik",
    address: "667 Concord Street",
    photo_url: "https://cdn.kino.kz/cinema/91/p223x267.png",
  },
  {
    id: "4",
    name: "Dolby atoms",
    address: "2376 Goodwin Avenue",
    photo_url: "https://cdn.kino.kz/cinema/49/p223x267.jpg",
  },
];
const CinemaSearch = () => {
  return (
    <div className="container">
      <CinemaList></CinemaList>
      <CinemaTableData cinemalist={ccss}></CinemaTableData>
      {/* <SearchForm></SearchForm> */}
    </div>
  );
};

export default CinemaSearch;
