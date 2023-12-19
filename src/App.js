import About from "./components/About";
// import Client from "./components/Client";
// import Data from "./components/Data";
import HomePage from "./components/HomePage";
// import Report from "./components/Report";
// import Table from "./components/Table";
// import FIle from "./components/File";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Styles } from "./App.style";
import Crud from "./components/Crud";
import Crud1 from "./components/Crud1";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo";
import Counter from "./components/useReducer";
import Counter1 from "./components/Counter1";
import MuiForm from "./components/MuiForm";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

function App(props) {
  const inputRef = useRef(null);
  const ThemeContext = createContext(null);
  const [value, setValue] = useState("vasu");
  const [bool, setBool] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { key: "0", component: "Home", to: "/" },
    { key: "1", component: "About", to: "/about" },
    { key: "2", component: "Crud", to: "/crud" },
    { key: "3", component: "Crud1", to: "/crud1" },
    { key: "4", component: "useMemo", to: "/memo" },
    { key: "5", component: "Counter", to: "/counter1" },
    { key: "6", component: "MuiForm", to: "/muiform" },
  ];
  const drawerWidth = 240;
  const onShow = () => {
    if (bool) {
      setValue("milan");
    }
  };

  useEffect(() => {
    setBool(true);
  }, []);

  const { window } = props;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink
                to={item?.to}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <ListItemText
                  style={{ textAlign: "center" }}
                  primary={item?.component}
                />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box> 
  );
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
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
                  MUI
                </Typography>
                <Typography
                  sx={{
                    display: { xs: "block", sm: "none" },
                  }}
                >
                  hdkdhkadhjk
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => (
                    <Button key={item}>
                      <NavLink
                        style={{ color: "white", textDecoration: "none" }}
                        to={item?.to}
                      >
                        {item?.component}
                      </NavLink>
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
            <nav>
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
            </nav>

            <Box component="main" sx={{ p: 3 }}>
              <Toolbar />
              <Routes>
                <Route exact path="/" element={<HomePage name={value} />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/crud" element={<Crud />} />
                <Route exact path="/crud1" element={<Crud1 />} />
                <Route exact path="/memo" element={<UseMemo />} />
                <Route exact path="/counter1" element={<Counter1 />} />
                <Route exact path="/muiform" element={<MuiForm />} />
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
