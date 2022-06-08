import React, { useState } from "react";

const Test = () => {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  function handleRowChange(event) {
    setRow(event.target.value);
  }
  function handleColumnChange(event) {
    setColumn(event.target.value);
  }
  function onClick(e) {
    const parentDiv = document.getElementById("content");
    const element = document.createElement("div");
    var pos_left = e.clientX - 32 + "px";
    var pos_top = e.clientY - 32 + "px";
    element.style = `background: red; left: ${pos_left}; top: ${pos_top};position: absolute; width: 50px; height: 50px; z-index: 1`;
    if (e.clientX < 32) {
      element.style.left = "0px";
    }
    if (e.clientY < 32) {
      element.style.top = "0px";
    }
    if (e.clientX > 682) {
      element.style.left = "650px";
    }
    if (e.clientY > 382) {
      element.style.top = "350px";
    }
    document.getElementById("content").append(element);

    console.log("ON CLICK, clientX:", e.clientX);
    console.log("ON CLICK, clientY:", e.clientY);
  }

  const CreateTable = () => {
    var table = document.createElement("table");
    table.style = "background: gray; z-index: 100; width: 200px; height: 200px";
    for (var i = 0; i < row; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j < column; j++) {
        var td = document.createElement("td");
        td.style = "background: white;";
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.getElementById("content").append(table);
  };

  return (
    <>
      <div
        style={{
          width: 700,
          height: 400,

          position: "relative",
        }}
        onClick={onClick}
        id="content"
        // onMouseDown={this.onMouseDown}
      />
      {row > 0 && column > 0 ? <div onChange={CreateTable}></div> : ""}
      <label>Row</label>
      <input type="number" value={row} onChange={handleRowChange} />
      <label>Column</label>
      <input type="number" value={column} onChange={handleColumnChange} />
    </>
  );
};

export default Test;
