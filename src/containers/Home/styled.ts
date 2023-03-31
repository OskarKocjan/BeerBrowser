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
    gap: "10px",
    width: "100%",
    minHeight: "450px",

    ".main-left": {
        width: "10%",
        [theme.breakpoints.down("sm")]: {
            width: "5%",
        },
    },
    ".main-center": {
        height: "100%",
        width: "80%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "3rem",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "2rem",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridGap: "1rem",
        },
    },
    ".main-right": {
        width: "10%",
        [theme.breakpoints.down("sm")]: {
            width: "5%",
        },
    },
}));
