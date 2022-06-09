import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AxiosService from "../../../../services/axios/index";
import CinemaListData from "../CinemaListData.jsx/CinemaListData";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

const CinemaTableData = (props) => {
  const [cinemas, setCinemas] = useState(props.cinemalist);
  const [search, setSearch] = useState("");

  useEffect(() => {
    
    // setLoading(true);
    // CourseService.getAllUsers().then((res) => {
    //   setUsers(res.data);
    //   setLoading(false);
    // });
  }, []);
  const handleSearchChange = async (event) => {
    setSearch(event.target.value);
    event.preventDefault();
  };

  const currentCinemas = cinemas.filter(
    (cinema) =>
      cinema.name.toLowerCase().includes(search.toLowerCase()) ||
      cinema.address.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Form>
        <InputGroup className="mb-3" style={{ width: "50%" }}>
          <FormControl
            placeholder="Название кинотеатра, улицы..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleSearchChange}
          />
          <Button variant="primary" id="button-addon2">
            Поиск
          </Button>
        </InputGroup>
      </Form>
      <CinemaListData cinemalist={currentCinemas}></CinemaListData>
    </div>
  );
};

export default CinemaTableData;
