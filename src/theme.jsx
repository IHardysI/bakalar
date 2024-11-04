import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#119640',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#20201e',
      light: '#4c4c4b',
      contrastText: '#ffffff',
      dark: '#283E2F',
    },
    background: {
      default: '#ffffff',
      paper: '#DCEDC8',
    },
    text: {
      secondary: '#252525',
      primary: '#fdfdfd',
      disabled: 'rgba(6,6,6,0.38)',
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;

