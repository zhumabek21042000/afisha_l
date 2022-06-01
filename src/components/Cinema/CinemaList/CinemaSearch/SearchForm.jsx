import React from "react";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";

const SearchForm = () => {
  return (
    <InputGroup className="mb-3" style={{ width: "50%" }}>
      <FormControl
        placeholder="Название кинотеатра, улицы..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => e.target.value}
      />
      <Button variant="primary" id="button-addon2">
        Поиск
      </Button>
    </InputGroup>
  );
};

export default SearchForm;
