import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../theme';

function Uvod() {
  return (
    <Box>
      <Typography variant='h2'color={theme.palette.text.secondary}>Home Page</Typography>
    </Box>
  );
}

export default Uvod;