import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header, Image, Table } from "semantic-ui-react";

const MovieData = ({ movieList, loading }) => {
  const [movies, setMovies] = useState([]);

  let history = useLocation();

  useEffect(() => {
    setMovies(movieList);
  }, [movieList]);

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
            
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default MovieData;
