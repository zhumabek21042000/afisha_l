import React from "react";
import { Grid } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import CinemaTable from "./Cinema/CinemaTable";

const AdminPage = () => {
  return (
    <div className="container">
      <Grid>
        <Grid.Column width={4}>
          <Dashboard />
        </Grid.Column>
        <Grid.Column width={9}>
          <Routes>
            {/* <Route path="/adcinemas" element={<CinemaTable />}></Route> */}
            <Route path="/halls"></Route>
            <Route path="/movies"></Route>
            <Route path="/news"></Route>
            <Route path="/articles"></Route>
            <Route path="/events"></Route>
            <Route path="/users"></Route>
            <Route path="/comments"></Route>
          </Routes>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AdminPage;
