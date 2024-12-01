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
  Typography,
  Container,
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
        background: theme.palette.secondary.dark,
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
                onClick={() =>
                  children ? toggleSubmenu(label) : setMobileOpen(false)
                }
                component={children ? "div" : Link}
                to={children ? undefined : path}
              >
                <ListItemText primary={label} sx={{ color: "#FFFFFF" }} />
                {children && <ExpandMore sx={{ color: "#FFFFFF" }} />}
              </ListItemButton>
            </ListItem>
            {children && (
              <Collapse in={openSubmenus[label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {children.map((subItem, index) => (
                    <React.Fragment key={subItem.label}>
                      {/* Дадаў Divider, які пачынаецца ад пачатку слова */}
                      <Divider
                        sx={{
                          backgroundColor: mobileDividerColor,
                          marginLeft: theme.spacing(4),
                        }}
                      />
                      <ListItemButton
                        component={Link}
                        to={subItem.path}
                        sx={{ pl: 4 }}
                        onClick={() => setMobileOpen(false)}
                      >
                        <ListItemText
                          primary={subItem.label}
                          sx={{ color: "#FFFFFF" }}
                        />
                      </ListItemButton>
                    </React.Fragment>
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
      <Box sx={{ width: "100%" }}>
        <CssBaseline />
        {/* Header with logo and text block */}
        <AppBar
          position="static"
          sx={{
            background: theme.palette.primary.main,
            padding: { xs: 0.5, sm: 1.5 },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              {/* Wrapped Avatar with Link */}
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Avatar
                  alt="logo"
                  src={logo}
                  sx={{
                    width: { xs: 53, sm: 73, md: 103 },
                    height: { xs: 53, sm: 73, md: 103 },
                    marginRight: 2,
                    cursor: 'pointer', // Optional: Change cursor to pointer on hover
                  }}
                />
              </Link>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: { xs: "3px", sm: "5px" },
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                    fontWeight: "bold",
                    textAlign: "center",
                    color: theme.palette.getContrastText(
                      theme.palette.primary.main
                    ),
                    textTransform: "uppercase",
                  }}
                >
                  Slavoj Velké Popovice
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                    textAlign: "center",
                    color: theme.palette.getContrastText(
                      theme.palette.primary.main
                    ),
                    textTransform: "uppercase",
                  }}
                >
                  Oficiální stránky hokejového klubu HC Slavoj Velké Popovice
                </Typography>
              </Box>
            </Box>
          </Container>
        </AppBar>
        {/* Navigation Bar */}
        <AppBar
          component="nav"
          position="static"
          sx={{
            width: "100%",
            background: theme.palette.primary.main,
          }}
        >
          <Container>
            <Toolbar sx={{ justifyContent: "center", width: "100%", padding: 0 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                sx={{
                  display: { sm: "none" },
                  padding: theme.spacing(1),
                }}
              >
                <MenuIcon />
              </IconButton>
              {/* Mobile version: Add text next to menu icon */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { sm: "none" },
                }}
              >
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    SLAVOJ VELKÉ POPOVICE
                  </Typography>
                </Link>
              </Box>
              {/* Desktop version menu */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  gap: { sm: 1, lg: 2 },
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
                      variant="outlined"
                      component={Link}
                      to={path}
                      sx={{
                        border: '1.5px solid rgba(255,255,255,0.4)',
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: {
                          xs: "0.7rem",
                          sm: "0.8rem",
                          md: "0.9rem",
                          lg: "1rem",
                          xl: "1.4rem",
                        },
                        textWrap: "nowrap",
                        textTransform: "none",
                        //background: theme.palette.secondary.dark,
                        padding: "6px 12px",
                        ":hover": {
                          backgroundColor: alpha(
                            theme.palette.secondary.dark,
                            0.9
                          ),
                          borderColor: alpha(theme.palette.secondary.dark, 0.9),
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
                                  backgroundColor: "rgba(255, 255, 255, 0.1)",
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
          </Container>
        </AppBar>
        {/* Drawer for mobile navigation */}
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
          <Box
            sx={{
              textAlign: "center",
              height: "100%",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              background: theme.palette.secondary.dark,
            }}
          >
            {/* Wrapped Avatar with Link in Drawer */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Avatar
                alt="logo"
                src={logo}
                sx={{ width: 56, height: 56, margin: "5px", cursor: 'pointer' }}
              />
            </Link>
            <Divider sx={{ backgroundColor: mobileDividerColor }} />
            <List>
              {navItems.map(({ label, children, path }) => (
                <React.Fragment key={label}>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ textAlign: "left" }}
                      onClick={() =>
                        children ? toggleSubmenu(label) : setMobileOpen(false)
                      }
                      component={children ? "div" : Link}
                      to={children ? undefined : path}
                    >
                      <ListItemText primary={label} sx={{ color: "#FFFFFF" }} />
                      {children && <ExpandMore sx={{ color: "#FFFFFF" }} />}
                    </ListItemButton>
                  </ListItem>
                  {children && (
                    <Collapse in={openSubmenus[label]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {children.map((subItem, index) => (
                          <React.Fragment key={subItem.label}>
                            {/* Divider starts from the beginning of the word */}
                            <Divider
                              sx={{
                                backgroundColor: mobileDividerColor,
                                marginLeft: theme.spacing(4),
                              }}
                            />
                            <ListItemButton
                              component={Link}
                              to={subItem.path}
                              sx={{ pl: 4 }}
                              onClick={() => setMobileOpen(false)}
                            >
                              <ListItemText
                                primary={subItem.label}
                                sx={{ color: "#FFFFFF" }}
                              />
                            </ListItemButton>
                          </React.Fragment>
                        ))}
                      </List>
                    </Collapse>
                  )}
                  <Divider sx={{ backgroundColor: mobileDividerColor }} />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
