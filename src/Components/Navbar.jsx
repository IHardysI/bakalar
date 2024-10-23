// Navbar.jsx
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Collapse,
  Divider,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/system";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const mobileDividerColor = "gray";

const navItems = [
  { label: "Úvod", path: "/" },
  {
    label: "Klub",
    path: "/klub",
    children: [
      { label: "Základní informace", path: "/klub/zakladni-informace" },
      { label: "Kontakty", path: "/klub/kontakty" },
      { label: "Partneři", path: "/klub/partneri" },
      { label: "Zimní stadion", path: "/klub/zimni-stadion" },
    ],
  },
  {
    label: "A tým",
    path: "/atym",
    children: [
      { label: "Soupiska", path: "/atym/soupiska" },
      { label: "Statistika", path: "/atym/statistika" },
      { label: "Realizační tým", path: "/atym/realizacni-tym" },
      { label: "Zápasy", path: "/atym/zapasy" },
      { label: "Tabulka", path: "/atym/tabulka" },
      { label: "Info", path: "/atym/info" },
    ],
  },
  { label: "Mládež", path: "/mladez" },
  { label: "Školičky", path: "/skolicky" },
  { label: "Rozpis ledu", path: "/rozpis-ledu" },
];

function Navbar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const submenuTimeouts = useRef({});

  const theme = useTheme();

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleMouseEnter = (label) => {
    clearTimeout(submenuTimeouts.current[label]);
    setOpenSubmenus((prev) => ({ ...prev, [label]: true }));
  };

  const handleMouseLeave = (label) => {
    submenuTimeouts.current[label] = setTimeout(() => {
      setOpenSubmenus((prev) => ({ ...prev, [label]: false }));
    }, 80);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Avatar
        alt="logo"
        src={logo}
        sx={{ width: 56, height: 56, margin: "5px" }}
      />
      <Divider sx={{ backgroundColor: mobileDividerColor }} />
      <List>
        {navItems.map(({ label, children, path }) => (
          <React.Fragment key={label}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "left" }}
                onClick={() => (children ? toggleSubmenu(label) : setMobileOpen(false))}
                component={children ? 'div' : Link}
                to={children ? undefined : path}
              >
                <ListItemText primary={label} />
                {children && <ExpandMore />}
              </ListItemButton>
            </ListItem>
            {children && (
              <Collapse in={openSubmenus[label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {children.map((subItem) => (
                    <ListItemButton
                      key={subItem.label}
                      component={Link}
                      to={subItem.path}
                      sx={{ pl: 4 }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <ListItemText primary={subItem.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
            <Divider sx={{ backgroundColor: mobileDividerColor }} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar component="nav" position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            alt="logo"
            src={logo}
            sx={{
              width: { xs: 50, sm: 70, md: 100 },
              height: { xs: 50, sm: 70, md: 100 },
              margin: "5px",
              display: { xs: "none", sm: "flex" },
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { sm: 1, lg: 2 },
              marginLeft: "auto",
            }}
          >
            {navItems.map(({ label, children, path }) => (
              <Box
                key={label}
                onMouseEnter={() => handleMouseEnter(label)}
                onMouseLeave={() => handleMouseLeave(label)}
                sx={{ position: "relative" }}
              >
                <Button
                  component={Link}
                  to={path}
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    textWrap: "nowrap",
                    textTransform: "none",
                    border: "1px solid #3a3a3a",
                    borderRadius: 2,
                    background: theme.palette.secondary.dark,
                    padding: {
                      sm: "7px 15px",
                      md: "8px 17px",
                      lg: "10px 20px",
                    },
                    ":hover": {
                      backgroundColor: alpha(
                        theme.palette.secondary.dark,
                        0.9
                      ),
                      borderColor: alpha(theme.palette.secondary.dark, 0.9),
                      scale: 1.02,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {label}
                </Button>
                {children && (
                  <Collapse
                    in={openSubmenus[label]}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                      position: "absolute",
                      zIndex: 1,
                      backgroundColor: theme.palette.secondary.dark,
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      mt: 1,
                      borderRadius: 1,
                      padding: "10px",
                      width: "max-content",
                    }}
                  >
                    <List>
                      {children.map((subItem) => (
                        <ListItemButton
                          key={subItem.label}
                          component={Link}
                          to={subItem.path}
                          sx={{
                            ":hover": {
                              backgroundColor:
                                "rgba(255, 255, 255, 0.1)",
                            },
                            borderRadius: 1,
                            color: "#FFFFFF",
                          }}
                          onClick={() => setOpenSubmenus({})}
                        >
                          <ListItemText primary={subItem.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: theme.palette.secondary.dark,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
