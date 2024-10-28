import React from "react";
import Navbar from "./Components/Navbar";
import Ads from "./Components/Ads.jsx";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Using Grid2 with size prop
import { Outlet } from "react-router-dom";
import FacebookPage from "./Components/FacebookPage.jsx"; // Правільны шлях для імпарту
import theme from "./theme.jsx";

function Root() {
  return (
    <Box>
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
          flexWrap: "nowrap",
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
      
      {/* Дадаем Box для цэнтравання кампанента FacebookPage */}
      <Box
        sx={{
          display: 'flex',
          background: theme.palette.primary.main,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mt: 2, // адступ зверху
          pt: 2,
          pb: 2,
        }}
      >
        <FacebookPage 
          pageUrl="https://www.facebook.com/hcslavojvelkepopovice/" 
          width={800} 
          height={400} 
        /> {/* Дадаем футэр з Facebook-виджэтам */}
      </Box>
    </Box>
  );
}

export default Root;
