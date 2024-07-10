import { Component, Text } from "react";
import { Link } from "react-router-dom";
import "./Workflow.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import SvgIcon from "@mui/material/SvgIcon";
import { styled } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";

const CustomTreeItem = styled(TreeItem)({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
});

class Workflow extends Component {
  CloseSquare(props) {
    return (
      <SvgIcon
        className="close"
        fontSize="inherit"
        style={{ width: 14, height: 14 }}
        {...props}
      >
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
      </SvgIcon>
    );
  }

  render() {
    return (
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
          <div style={{ color: "black" }}>Step 1/3</div>
          <div style={{ color: "black" }}>Configure your Nudge </div>
        </div>

        <div class="Tree">
          <SimpleTreeView
            defaultExpandedItems={["grid"]}
            slots={{
              expandIcon: AddBoxIcon,
              collapseIcon: IndeterminateCheckBoxIcon,
            }}
          >
            <CustomTreeItem class="TreeItem" itemId="grid1" label="Alerts">
              <CustomTreeItem style={{marginTop: 10}} itemId="grid-communit1y" label="Service Alerts" />
            </CustomTreeItem>
            <CustomTreeItem class="TreeItem" itemId="grid" label="Expiry Notifications">
              <CustomTreeItem  style={{marginTop: 10}}  itemId="grid-community" label="Insurance Expiry" />
              <CustomTreeItem  style={{marginTop: 10}}  itemId="grid-pro" label="Warranty Expiry" />
            </CustomTreeItem>
            <CustomTreeItem class="TreeItem" itemId="pickers" label="Announcements">
              <CustomTreeItem
                style={{marginTop: 10}} 
                itemId="pickers-community"
                label="Vehicle Discounts"
              />
              <CustomTreeItem  style={{marginTop: 10}}  itemId="pickers-pro" label="New Car Launches" />
            </CustomTreeItem>
            <CustomTreeItem  class="TreeItem"  itemId="charts" label="Customer Events">
              <CustomTreeItem
                style={{marginTop: 10}} 
                itemId="charts-community"
                label="Customer Birthday"
              />
            </CustomTreeItem>
          </SimpleTreeView>
          <div style={{ marginTop: 30,display: "flex", justifyContent: "right", position: "relative" }}>
            <Link to="/scheduler" class="link-button">
              Next
            </Link>
          </div>
        </div>
      </Box>
    );
  }
}

export default Workflow;
