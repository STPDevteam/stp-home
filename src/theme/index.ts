import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Urbanist, Poppins, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily: "Urbanist, Poppins, Arial",
      }
    },
  },
});
