// Root.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Ads from './Components/Ads.jsx';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Using Grid2 with size prop
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <Box>
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
          flexWrap: 'nowrap',
        }}
      >
        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{
            flexBasis: 0,
            flexGrow: 1,
            marginRight: { md: '3px' },
          }}
        >
          <Outlet /> {/* Main content area */}
        </Grid>
        <Grid
          size={{ xs: 12, md: 2 }}
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '250px',
          }}
        >
          <Ads /> {/* Ads component on the right */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Root;
