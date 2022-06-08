import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header, Image, Table } from "semantic-ui-react";

const CinemaData = ({ cinemaList, loading }) => {
  const [cinemas, setCinemas] = useState([]);

  let history = useLocation();

  useEffect(() => {
    setCinemas(cinemaList);
  }, [cinemaList]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cinemas.map((cinema) => (
            <Table.Row>
              <Table.Cell>{cinema.id}</Table.Cell>
              <Table.Cell>{cinema.name}</Table.Cell>
              <Table.Cell>{cinema.address}</Table.Cell>
              <Table.Cell>{cinema.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CinemaData;
