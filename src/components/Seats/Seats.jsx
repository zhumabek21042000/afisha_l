import AfishaService from "../../services/axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useParams } from "react-router-dom";

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function Seats() {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const params = useParams();
  useEffect(() => {
    AfishaService.getMovieById(params.id).then((res) => {
      setSelectedMovie(res.data);
    });
  });
  return (
    <div className="App">
      <Movies
        movie={selectedMovie}
        movie_name={selectedMovie ? selectedMovie.name : ""}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />
      <p>
        {" "}
        {localStorage.setItem("number_of_selected_seat", selectedSeats.length)}
      </p>
      <p> {localStorage.setItem("paid_amount", selectedSeats.length * 1000)}</p>
      {/* <p className="info">
        Вы выбрали <span className="count">{selectedSeats.length}</span> места
        по цене <span className="total">{selectedSeats.length * 1000} ТГ</span>
      </p> */}
    </div>
  );
}

function Movies({ movie, movie_name, onChange }) {
  return <div className="Movies">Фильм - {movie_name}</div>;
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Выбранные</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Занятые</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
      ? selectedSeats.includes(seat)
      : false;
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat)
            ? selectedSeats.includes(seat)
            : false;
          const isOccupied = false;
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}
