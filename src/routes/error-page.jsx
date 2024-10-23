import { useRouteError } from "react-router-dom";
import { Box, Container, Typography } from '@mui/material'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'110vh'}}>
      <Box id="error-page">
        <Typography variant="h2" align="center">Oops!</Typography>
        <Typography variant="subtitle1" align="center">Sorry, an unexpected error has occurred.</Typography>
        <Typography align="center">
          <i>{error.statusText || error.message}</i>
        </Typography>
      </Box>
    </Container>
  );
}