import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Inter",
    },
    palette: {
        primary: {
            main: "hsl(43, 74%, 72%)",
            dark: "#F4A460",
            light: "hsl(43, 74%, 55%, 35%)",
            contrastText: "#000",
        },
    },
});
