// src/Root.jsx

import React from "react";
import Navbar from "./Components/Navbar";
import Ads from "./Components/Ads.jsx";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Using Grid2 with size prop
import { Outlet } from "react-router-dom";
import FacebookPage from "./Components/FacebookPage.jsx"; // Existing desktop component
import FacebookPageMobile from "./Components/FacebookPageMobile.jsx"; // New mobile component
import theme from "./theme.jsx";

function Root() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
          flexWrap: "nowrap",
          flexGrow: 1, // Ensures the main content area expands to fill available space
        }}
      >
        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{
            flexBasis: 0,
            flexGrow: 1,
            marginRight: { md: "3px" },
          }}
        >
          <Outlet /> {/* Main content area */}
        </Grid>
        <Grid
          size={{ xs: 12, md: 2 }}
          sx={{
            display: { xs: "none", md: "block" },
            width: "250px",
          }}
        >
          <Ads /> {/* Ads component on the right */}
        </Grid>
      </Grid>
      
      {/* Facebook Page Section at the Bottom */}
      <Box
        sx={{
          display: 'flex',
          background: theme.palette.primary.main,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mt: 'auto', // Pushes this section to the bottom
          pt: 2,
          pb: 2,
        }}
      >
        {/* Desktop FacebookPage Component */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <FacebookPage 
            pageUrl="https://www.facebook.com/hcslavojvelkepopovice/" 
            width={800} 
            height={400} 
          />
        </Box>

        {/* Mobile FacebookPageMobile Component */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <FacebookPageMobile
            pageUrl="https://www.facebook.com/hcslavojvelkepopovice/"
            wallpaperUrl="https://scontent.fprg5-1.fna.fbcdn.net/v/t39.30808-6/461259141_1061589272644622_1073752436884984907_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=8BDKYlO09xQQ7kNvgEsJxFM&_nc_zt=23&_nc_ht=scontent.fprg5-1.fna&_nc_gid=Ag7fyAIuSEWnCikipRx0iGS&oh=00_AYC0-Pn9lhOyMNO1hZMjJaZJ4WzJH1lT_Y6Ozw6KvCVkOQ&oe=6727F6D2" // Replace with actual wallpaper URL
            profileImageUrl="https://scontent.fprg5-1.fna.fbcdn.net/v/t39.30808-1/462077812_1068315781971971_6556414502344489979_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=qxIwMSGPvowQ7kNvgEXtnm8&_nc_zt=24&_nc_ht=scontent.fprg5-1.fna&_nc_gid=Ag7fyAIuSEWnCikipRx0iGS&oh=00_AYDuTVS907WVkEuCp8mxXwb3WE7T_8KE9U0D-AyyJYaCuw&oe=6727F4D8" // Replace with actual profile image URL
            pageName="HC Slavoj Velke Popovice" // Replace with the actual page name
            followersCount="1,097" // Replace with the actual follower count
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Root;
