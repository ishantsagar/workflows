import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.state = { age: 4 };
  }

  handleChange = (event) => {
    this.setState({ age: event.target.value });
  };

  render() {
    return (
      <div class="App-bg">
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
          <div class="Workflow-topbar">
            <div style={{ color: "black" }}>Step 2/3</div>
            <div style={{ color: "black" }}>Configure Nudge Schedule </div>
          </div>

          <div class="Tree">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Schedule</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.age}
                label="Set the nudge schedule"
                onChange={this.handleChange}
              >
                <MenuItem value={10}>minute(s)</MenuItem>
                <MenuItem value={20}>hours(s)</MenuItem>
                <MenuItem value={30}>daily</MenuItem>
                <MenuItem value={30}>weekly</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginTop: 30,display: "flex", justifyContent: "right", position: "relative" }}>
            <Link to="/communication" class="link-button">
              Next
            </Link>
          </div>
        </Box>
      </div>
    );
  }
}

export default Scheduler;
