import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AfishaService from "../../../services/axios";
import CinemaData from "./CinemaData";
import Pagination from "../Pagination";

const CinemaTable = () => {
  const [cinemas, setCinemas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cinemasPerPage] = useState(10);
  const [search, setSearch] = useState("");
  let history = useLocation();

  useEffect(() => {
    setLoading(true);
    AfishaService.getAllCinemasByCity().then((res) => {
      setCinemas(res.data.data);
      setLoading(false);
    });
  }, []);
  const handleSearchChange = async (event) => {
    setSearch(event.target.value);
    event.preventDefault();
  };
  const indexOfLastCinema = currentPage * cinemasPerPage;
  const indexOfFirstCinema = indexOfLastCinema - cinemasPerPage;
  const currentCinemas = cinemas
    .filter(
      (cinema) =>
        cinema.name.toLowerCase().includes(search.toLowerCase()) ||
        cinema.address.toLowerCase().includes(search.toLowerCase())
    )
    .slice(indexOfFirstCinema, indexOfLastCinema);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <div className="row">
        <h2 style={{ flexGrow: "0.05" }}>Кинотеатры</h2>
        <button
          type="button"
          className="btn btn-primary w-25"
          style={{ marginLeft: "12px" }}
        >
          Добавить
        </button>
      </div>
      <form className="mt-3">
        <input
          class="form-control w-25"
          type="text"
          onChange={handleSearchChange}
          placeholder="Поиск..."
          aria-label="Search"
        />
      </form>
      {!loading ? (
        cinemas.length > 0 ? (
          <>
            <CinemaData
              cinemaList={currentCinemas.reverse()}
              loading={loading}
            ></CinemaData>
            <Pagination
              itemsPerPage={cinemasPerPage}
              totalItems={cinemas.length}
              paginate={paginate}
            />
          </>
        ) : (
          <h3 className="mt-3 text-center">Пусто...</h3>
        )
      ) : (
        AfishaService.loadingGif()
      )}
    </div>
  );
};

export default CinemaTable;
