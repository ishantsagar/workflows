import React, { Component } from "react";
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

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

class Communication extends Component {
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
            <div style={{ color: "black" }}>Step 3/3</div>
            <div style={{ color: "black" }}>
              Configure Communication Medium{" "}
            </div>
          </div>
          <div>
          <div>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Select the Mode of communication
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Whatsapp"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Email"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="SMS"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div style={{marginTop: 80, width: 500}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Notification Template
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.age}
                label="Set the nudge schedule"
                onChange={this.handleChange}
              >
                <MenuItem value={10}>Template One</MenuItem>
                <MenuItem value={20}>Template Two</MenuItem>
              </Select>
            </FormControl>
          </div>
          </div>
        </Box>
      </div>
    );
  }
}

export default Communication;
