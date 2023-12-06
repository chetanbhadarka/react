import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  Divider,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { onLogout } from "../redux/reducer/AuthReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserDetail } from "../redux/reducer/UserReducer";

export default function DashboardContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event) => {
    setIsOpen((prev) => !prev);
  };

  const onLogoutPress = () => {
    dispatch(onLogout());
    dispatch(setUserDetail(null));
    navigate("/applications/sign-in");
  };

  const list = () => (
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
  );

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
        {list()}
      </Drawer>
    </Box>
  );
}
