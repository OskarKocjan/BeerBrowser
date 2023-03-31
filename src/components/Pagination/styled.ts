import { Box, styled } from "@mui/material";

export const StyledPagination = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2rem",
    marginBottom: "2rem",

    button: {
        margin: "-8px",
    },

    svg: {
        fontSize: "1.5rem",
        color: theme.palette.primary.contrastText,
    },

    ".page-number-container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        width: "25px",
        height: "25px",
        fontSize: "1.2rem",
        boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    },
}));
