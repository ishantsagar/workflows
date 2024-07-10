import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Scheduler from "./component/Scheduler";
import Workflow from "./component/Workflow";
import Communication from "./component/Communication";
import "./App.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Card from "@mui/material/Card";
import { CardWarrantExpiry, CardInsuranceExpiry } from "./card_const";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/workflow" element={<Workflow />}></Route>
          <Route path="/scheduler" element={<Scheduler />}></Route>
          <Route path="/communication" element={<Communication />}></Route>
        </Routes>
        <Box sx={{ flexGrow: 1 }} class="App-bg">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Nandi Toyota
              </Typography>
              <Button color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
          <div style={{ display: "flex", justifyContent: "right", position: "relative" }}>
            <Link to="/workflow" class="link-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" style={{marginRight: 5}}><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334zm0-9.334v5.334M5.333 8h5.334"></path></svg>
              Add Automation Workflow
            </Link>
          </div>
          <Card variant="outlined" style={{ height: 150, margin: 20}}>
            {CardWarrantExpiry}
          </Card>
          <Card variant="outlined" style={{ height: 150, margin: 20 }}>
            {CardInsuranceExpiry}
          </Card>
          <Card variant="outlined" style={{ height: 150, margin: 20 }}>
            {CardWarrantExpiry}
          </Card>
          <Card variant="outlined" style={{ height: 150, margin: 20 }}>
            {CardWarrantExpiry}
          </Card>
        </Box>
      </Router>
    );
  }
}

export default App;
