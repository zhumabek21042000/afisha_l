import React from "react";
import { Header, Image, Table } from "semantic-ui-react";

function CinemaSchedule(props) {
  return (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Понедельник</Table.HeaderCell>
          <Table.HeaderCell>Вторник</Table.HeaderCell>
          <Table.HeaderCell>Среда</Table.HeaderCell>
          <Table.HeaderCell>Четверг</Table.HeaderCell>
          <Table.HeaderCell>Пятница</Table.HeaderCell>
          <Table.HeaderCell>Суббота</Table.HeaderCell>
          <Table.HeaderCell>Воскресенье</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>10:00 - 00:00</Table.Cell>
          <Table.Cell>10:00 - 00:00</Table.Cell>
          <Table.Cell>10:00 - 00:00</Table.Cell>
          <Table.Cell>10:00 - 00:00</Table.Cell>
          <Table.Cell>10:00 - 00:00</Table.Cell>
          <Table.Cell>10:00 - 00:00</Table.Cell>
          <Table.Cell>10:00 - 00:00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default CinemaSchedule;
