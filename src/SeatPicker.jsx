import React, { useState } from "react";
import "./style.css";

const SeatPicker = () => {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [screenWidth, setScreenWidth] = useState(400);
  const [seats, setSeats] = useState({});
  function handleRowChange(event) {
    setRow(event.target.value);
  }
  function handleColumnChange(event) {
    setColumn(event.target.value);
  }
  function handleScreenWidthChange(event) {
    setScreenWidth(event.target.value);
  }
  const saveRows = () => {
    const seats = document.querySelectorAll("[r='33']");
    let row_seat = Array.from(seats).map((seat) => ({
      row_number: parseInt(seat.getAttribute("row_number")),
      seats: Array.from(seat.children).map((s) => ({
        x: s.getAttribute("status") === "empty" ? "0px" : "35px",
        y: s.getAttribute("status") === "empty" ? "0px" : "35px",
        m_top: null,
        m_left: "5px",
        m_right: "5px",
        is_taken: false,
        m_bottom: null,
        col_number: parseInt(s.getAttribute("column")),
      })),
    }));
    const rows = { rows: row_seat };
    return rows;
  };
  const saveHall = () => {
    const rows = saveRows();
    const data = {
      x: `${column * 50}px`,
      y: `${column * 50}px`,
      screen: {
        x: `${column * 37}px`,
        y: "15px",
        m_top: null,
        m_left: null,
        m_right: null,
        m_bottom: null,
        curve_degree: "5px",
      },
      seating_area: {
        x: `${column * 40}px`,
        y: `${column * 40}px`,
        m_top: null,
        m_left: null,
        m_right: null,
        m_bottom: null,
        rows: rows,
      },
    };
    console.log(JSON.stringify(data));
  };
  const createTable = () => {
    var element = document.getElementById("seat_div");
    if (typeof element != "undefined" && element != null) {
      element.remove();
    }
    if (row > 0 && column > 0) {
      var screen = document.createElement("div");
      var screenText = document.createTextNode("Экран");
      screen.appendChild(screenText);
      screen.style = `width: ${
        column * 37
      }px; height: 15px;  border: solid 5px #000;border-color: #000 transparent transparent transparent;border-radius: 50%/100px 100px 0 0; padding-top: -10px; padding-bottom: 20px`;
      var table = document.createElement("div");
      table.setAttribute("id", "seat_div");
      table.style = `background: gray; height: ${row * 40}px; width:${
        column * 40
      }px; margin-right: auto; margin-left: auto`;
      table.appendChild(screen);
      for (var i = 0; i < row; i++) {
        var tr = document.createElement("div");
        tr.setAttribute("row_number", i + 1);
        tr.setAttribute("r", "33");
        tr.style =
          "background: gray; height: 40px; width: inherit; display: flex;justify-content: start";
        for (var j = 0; j < column; j++) {
          var td = document.createElement("div");
          td.setAttribute("status", "empty");
          td.setAttribute("row", i + 1);
          td.setAttribute("column", j + 1);
          td.setAttribute("class", "seat");
          td.style =
            "background: orange; height: 35px;width: 35px; margin-left: 5px; margin-right: 5px";

          tr.appendChild(td);
        }
        table.appendChild(tr);
      }

      document.getElementById("content").append(table);
    }
  };

  const clickOnDiv = (event) => {
    if (
      event.target.hasAttribute("status") &&
      event.target.getAttribute("status") === "empty"
    ) {
      event.target.style.background = "green";
      event.target.setAttribute("status", "sit");
    } else if (
      event.target.hasAttribute("status") &&
      event.target.getAttribute("status") === "sit"
    ) {
      event.target.style.background = "orange";
      event.target.setAttribute("status", "empty");
    }
  };

  return (
    <div
      className="container"
      style={{ textAlign: "center", justifyContent: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <div
          onClick={(event) => clickOnDiv(event)}
          id="content"
          className="parent-div"
          style={{ textAlign: "center", justifyContent: "center" }}
        />
        <div className="child-div">
          {row > 0 && column > 0 ? <div onChange={createTable}></div> : ""}

          <label>Row</label>
          <input type="number" value={row} onChange={handleRowChange} />
          <label>Column</label>
          <input type="number" value={column} onChange={handleColumnChange} />

          <button onClick={() => createTable()}>Generate</button>
          
          <button onClick={() => saveHall()}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default SeatPicker;

// import React from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'

// const FormExampleForm = () => (
//   <Form>
//   <Form.Group widths='equal'>
//     <Form.Field>
//       <label>Row</label>
//       <input  placeholder='6' />
//     </Form.Field>
//     <Form.Field>
//       <label>Column</label>
//       <input placeholder='8' />
//     </Form.Field>
//     <Form.Field>
//       <label>Hall Width</label>
//       <input placeholder='700' />
//     </Form.Field>
//     <Form.Field>
//       <label>Hall Height</label>
//       <input placeholder='400' />
//     </Form.Field>
//     </Form.Group>

//       <Form.Group widths='equal'>
//     <Form.Field>
//       <label>Seat Width</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Seat Height</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//     </Form.Group>
//     <Button type='submit'>Save</Button>
//   </Form>
// )

// export default FormExampleForm
