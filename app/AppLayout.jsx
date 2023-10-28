"use client";

import ContextPanel from "@/components/ContextPanel/ContextPanel";
import NavRail from "@/components/NavRail/NavRail";
import  { ThemeContext } from "@/context/themeProvider";
import { createTheme } from "@mui/material";
import { useContext, useMemo } from "react";
import { ThemeProvider as MUIProvider } from "@mui/material";

const AppLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const MUItheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: {
            main: theme === "light" ? "#6750A4" : "#D0BCFF",
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            main: theme === "light" ? "#625B71" : "#CCC2DC",
          },
          error: {
            main: theme === "light" ? "#ba1a1a" : "#ffb4ab",
          },
        },
        components: {
          MuiButton: {
            variants: [
              {
                props: {
                  variant: "contained",
                },
                style: {
                  borderRadius: "100vh",
                  minHeight: "48px",
                },
              },
              {
                props: {
                  variant: "outlined",
                },
                style: {
                  borderRadius: "100vh",
                  minHeight: "48px",
                  boxSizing: "border-box",
                  borderWidth: "2px",
                },
              },
            ],
          },
        },
      }),
    [theme]
  );
  return (
    <div className={`${theme}`}>
      <MUIProvider theme={MUItheme}>
        <NavRail />
        <ContextPanel>{children}</ContextPanel>
      </MUIProvider>
    </div>
  );
};

export default AppLayout;
