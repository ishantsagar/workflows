import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ITEM_HEIGHT = 48;

const options = [
  "None",
  "Atria",
  "Callisto"
];


export const CardWarrantExpiry = (
  <React.Fragment>
    <CardContent>
      <div class="Overflow">
        <Typography variant="h6" component="div">
          Vehicle Warranty Expiry Notification
        </Typography>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            // aria-controls={open ? 'long-menu' : undefined}
            // aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            // onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            // anchorEl={anchorEl}
            // open={open}
            // onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === "Pyxis"}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        color="var(--sib-color_content-secondary)"
      >
        <path
          stroke="var(--sib-color_content-secondary)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334z"
        ></path>
        <path
          stroke="var(--sib-color_content-secondary)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 4v4l2.667 1.333"
        ></path>
      </svg>
      <Typography
        sx={{ mb: 1.5 }}
        color="text.secondary"
        style={{ fontWeight: "100" }}
      >
        Last Edited: 09-07-2024 13:28
      </Typography>
      <div class="Active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          class="index-module__sib-tag__icon-left--c25ys"
          data-testid="flow-list-tag-active-icon"
        >
          <path
            stroke="#CFCFCF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="8"
            d="M8 8.007V8"
          ></path>
        </svg>
        <Typography
          variant="body2"
          style={{ color: "green", fontWeight: "900" }}
        >
          Active
        </Typography>
      </div>
    </CardContent>
  </React.Fragment>
);

export const CardInsuranceExpiry = (
  <React.Fragment>
    <CardContent>
    <div class="Overflow">
        <Typography variant="h6" component="div">
          Insurance Expiry Notification
        </Typography>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            // aria-controls={open ? 'long-menu' : undefined}
            // aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            // onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            // anchorEl={anchorEl}
            // open={open}
            // onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === "Pyxis"}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        color="var(--sib-color_content-secondary)"
      >
        <path
          stroke="var(--sib-color_content-secondary)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334z"
        ></path>
        <path
          stroke="var(--sib-color_content-secondary)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 4v4l2.667 1.333"
        ></path>
      </svg>
      <Typography
        sx={{ mb: 1.5 }}
        color="text.secondary"
        style={{ fontWeight: "100" }}
      >
        Last Edited: 24-08-2024 04:28
      </Typography>
      <div class="Active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          class="index-module__sib-tag__icon-left--c25ys"
          data-testid="flow-list-tag-active-icon"
        >
          <path
            stroke="#CFCFCF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="8"
            d="M8 8.007V8"
          ></path>
        </svg>
        <Typography
          variant="body2"
          style={{ color: "grey", fontWeight: "900" }}
        >
          Inactive
        </Typography>
      </div>
    </CardContent>
  </React.Fragment>
);


