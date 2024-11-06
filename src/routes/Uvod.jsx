import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";
import ImageDialog from "../Components/ImageDialog";
import GamesComponent from "../Components/GamesComponent";

function Uvod() {
  return (
    <>
      <GamesComponent />
      <Paper
        elevation={2}
        sx={{
          width: "300px",
          height: "auto",
          color: "black",
          padding: "10px",
          marginBottom: 2,
        }}
      >
        <ImageDialog />
        <Typography variant="h5">Heeee</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus voluptate numquam maxime, magnam et impedit sint voluptatum officia a eum iste aliquid ratione? Reiciendis voluptas soluta illo molestias explicabo tempora, quia deleniti dicta hic ratione modi recusandae similique dignissimos culpa reprehenderit. Suscipit ipsa fugit nesciunt cum sequi in porro quasi reiciendis voluptates nihil! Distinctio, nobis. Dolor ipsum fugiat debitis voluptate, aliquam quis ratione blanditiis unde explicabo facilis neque! Nihil voluptate obcaecati, ullam necessitatibus magnam maiores laudantium adipisci eligendi exercitationem? Magni ea rerum provident quam voluptatum, quibusdam cupiditate est officia animi! Soluta minus autem eaque, totam consectetur possimus cum voluptatum.</Typography>
      </Paper>
    </>
  );
}

export default Uvod;
