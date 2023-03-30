import { styled } from "@mui/material";

export const StyledMainContentContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    gap: "3rem",
    marginTop: "30px",
    ".search-bar-container": {
        dislpay: "flex",
        width: "35%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        div: {
            width: "100%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
        button: {
            color: theme.palette.primary.contrastText,
            "&:hover": {
                cursor: "pointer",
            },
            "&:active": {
                marginTop: "1.8px",
            },
        },
        [theme.breakpoints.down("md")]: {
            width: "50%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "65%",
        },
    },
}));

export const StyledMiddleContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    width: "100%",

    ".main-left": {
        width: "20%",
        [theme.breakpoints.down("sm")]: {
            width: "10%",
        },
    },
    ".main-center": {
        height: "100%",
        width: "80%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        gridGap: "5rem",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(8, 1fr)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "repeat(12, 1fr)",
        },
        ".grid-item": {
            backgroundColor: "red",
            textAlign: "center",
            padding: "20px",
        },
    },
    ".main-right": {
        width: "20%",
        [theme.breakpoints.down("sm")]: {
            width: "10%",
        },
    },
}));
