import React from "react";
import { Stack, Paper } from "@mui/material";
import { styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'gray',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.mode === 'dark' ? '#fff' : '#000', // Fixed text color
}));


let adArr = ['ad1', 'ad2', 'ad3']

export default function Ads() {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {adArr.map((item, index) => (
        <Item sx={{aspectRatio:'1'}} key={index}>{item}</Item>
      ))}
    </Stack>
  );
}