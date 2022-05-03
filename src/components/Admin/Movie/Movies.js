import * as React from "react";
import { List, Datagrid, TextField, ImageField, ImageInput } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, ListGuesser } from "react-admin";

const dataProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com/posts"
);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource />
  </Admin>
);

export default App;
