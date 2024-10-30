// src/Components/FacebookPageMobile.jsx

import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import PropTypes from "prop-types";

const FacebookPageMobile = ({ pageUrl, wallpaperUrl, profileImageUrl, pageName, followersCount }) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 150,
        backgroundImage: `url(${wallpaperUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 1,
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a semi-transparent background
          padding: 1,
          borderRadius: 2,
        }}
      >
        <Avatar
          src={profileImageUrl}
          alt={pageName}
          sx={{ width: 48, height: 48, mr: 2 }}
        />
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {pageName}
          </Typography>
          <Typography variant="body2">
            {followersCount} followers
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        href={pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 1,
          alignSelf: "flex-start",
          backgroundColor: "#4267B2",
          '&:hover': {
            backgroundColor: "#365899",
          },
        }}
      >
        Follow Page
      </Button>
    </Box>
  );
};

FacebookPageMobile.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  wallpaperUrl: PropTypes.string.isRequired,
  profileImageUrl: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  followersCount: PropTypes.string.isRequired,
};

export default FacebookPageMobile;
