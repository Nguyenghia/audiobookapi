import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../containers/Auth/actions";
import { useAppSelector } from "../../../containers/store";

const drawerWidth = 240;
const navItems = [
  {
    title: "Dang Xuat",
    url: "/sign-in",
  },
];

const AppHeader = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <Button onClick={logoutHandler}>
          <ListItem key={"Dang Xuat"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Dang Xuat"} />
            </ListItemButton>
          </ListItem>
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ position: "relative", background: "#6b9876" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">S3LAP</Link>
          </Typography>
          {isAuth && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                key={"Dang Xuat"}
                sx={{ color: "#fff" }}
                onClick={logoutHandler}
              >
                {"Dang Xuat"}
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default AppHeader;
