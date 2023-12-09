import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { onLogoutAuthReducer } from "../redux/reducer/AuthReducer";
import { onLogoutUserReducer } from "../redux/reducer/UserReducer";
import { setDashboardTableData } from "../redux/reducer/TableReducer";
import { GetAllUserAPI } from "../redux/action/DashboardAction";
import TableComponent from "../components/TableComponent";

const headerNames = ["Profile", "Name", "Email", "Location", "User-Id"];

export default function DashboardContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dashboardTable: tableData } = useSelector(
    (state) => state.TableReducer
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getUserData = async (page) => {
    const response = await GetAllUserAPI(page);
    if (response) {
      const { page, total_pages, data } = response;
      dispatch(setDashboardTableData(data));
      setCurrentPage(page);
      setTotalPages(total_pages);
    }
  };

  const toggleDrawer = (event) => {
    setIsOpen((prev) => !prev);
  };

  const onLogoutPress = () => {
    dispatch(onLogoutAuthReducer());
    dispatch(onLogoutUserReducer());
    navigate("/applications/sign-in");
  };

  const pageChange = (page) => {
    setCurrentPage(page + 1);
    getUserData(page + 1);
  };

  useEffect(() => {
    getUserData(1);
    return () => dispatch(setDashboardTableData([]));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Demo App
          </Typography>
          <Button color="inherit" onClick={onLogoutPress}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Grid item m={5} xs={12}>
        <TableComponent
          headerNames={headerNames}
          tableData={tableData}
          totalPages={totalPages}
          currentPage={currentPage}
          pageChange={pageChange}
        />
      </Grid>
    </Box>
  );
}
