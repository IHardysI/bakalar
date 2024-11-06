// src/components/GamesComponent.jsx

import React, { useState, useEffect, memo } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  useTheme,
  styled,
  CircularProgress,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { mockGames } from "../Data/mockGames.js";
import Grid from "@mui/material/Grid2"; // Using Grid2 with size prop

// Styled Component for Selected Button
const SelectedButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  fontWeight: "bold",
  border: "1.5px solid #ffffff",
  boxShadow: "none",
  backgroundColor: theme.palette.primary.main,
  "&.selected": {
    backgroundColor: theme.palette.primary.dark,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "none",
  },
}));

const GameItem = memo(({ game, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12} md={4} sx={{ width: { xs: '100%', sm: '31%' } }}>
      <Box
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDirection={isMobile ? "row" : "column"}
        gap={isMobile ? "10px" : 2}
        justifyContent="center" // Center content horizontally
        width="100%"
        // Apply right border conditionally
        sx={{
          borderRight: !isMobile && index < 2 ? `1px solid ${theme.palette.divider}` : "none",
          paddingRight: !isMobile && index < 2 ? 2 : 0, // Add padding if border is present
          flexGrow: 1,
        }}
      >
        {/* Date and Time */}
        <Typography
          variant="subtitle1"
          color="black"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            whiteSpace: "nowrap",
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          {new Date(game.dateTime).toLocaleString("cs-CZ", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </Typography>
        {/* Teams */}
        <Typography
          variant="h6"
          color="black"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "nowrap",
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          <Box component="span" sx={{ mr: 1 }}>
            {game.homeClub.name}
          </Box>
          <Box component="span">-</Box>
          <Box component="span" sx={{ ml: 1 }}>
            {game.opponentClub.name}
          </Box>
        </Typography>
      </Box>
    </Grid>
  );
});

const CategoryButtons = ({ selectedCategory, onChange }) => {
  const theme = useTheme();

  const categories = [
    { label: "A-tým domácí utkání", value: "A-tým domácí utkání" },
    { label: "DOROST", value: "DOROST" },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={2}
      mt={0.5} // Added margin-top for spacing
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: "10px", // Increased padding for better spacing
        borderRadius: theme.shape.borderRadius,
      }}
    >
      {categories.map((category) => (
        <SelectedButton
          key={category.value}
          variant="contained"
          className={selectedCategory === category.value ? "selected" : ""}
          onClick={() => onChange(category.value)}
          aria-label={`Select ${category.label} games`}
        >
          {category.label}
        </SelectedButton>
      ))}
    </Box>
  );
};

const GamesComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedCategory, setSelectedCategory] = useState(
    "A-tým domácí utkání"
  );
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const USE_API = false; // Toggle API integration

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        if (USE_API) {
          // Placeholder for API integration
          setGames([]);
        } else {
          const data = mockGames[selectedCategory] || [];
          setGames(data);
        }
      } catch (err) {
        console.error(err);
        setError(
          USE_API
            ? "Nepodařilo se získat data ze serveru."
            : "Nepodařilo se načíst data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [selectedCategory, USE_API]);

  // Limit to 2 games on mobile
  const displayedGames = isMobile ? games.slice(0, 2) : games;

  return (
    <Box width="100%">
      {/* Games Section */}
      {loading ? (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress color="primary" />
        </Box>
      ) : error ? (
        <Box my={4}>
          <Alert severity="error">{error}</Alert>
        </Box>
      ) : displayedGames.length > 0 ? (
        <>
          <Grid
            container
            spacing={2}
            justifyContent="space-between" // Distribute space between items
            alignItems="flex-start"
            direction={isMobile ? "column" : "row"} // Stack vertically on mobile
          >
            {displayedGames.map((game, index) => (
              <React.Fragment key={game.id}>
                <GameItem game={game} index={index} />
                {/* Add Divider between games on mobile */}
                {isMobile && index < displayedGames.length - 1 && (
                  <Box width="100%">
                    <Divider />
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Grid>
          <CategoryButtons
            selectedCategory={selectedCategory}
            onChange={handleCategoryChange}
          />
        </>
      ) : (
        <Box my={4}>
          <Alert severity="info">
            Žádné nadcházející zápasy pro tuto kategorii.
          </Alert>
          <CategoryButtons
            selectedCategory={selectedCategory}
            onChange={handleCategoryChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default GamesComponent;
