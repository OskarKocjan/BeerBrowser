import { styled } from "@mui/material";

export const StyledMainDetailsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8rem",
    height: "30rem",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        margin: "0 auto",
        marginTop: "16vw",
        height: "60rem",
        width: "80%",
    },
}));

export const StyledLeftDetailsContainer = styled("div")(({ theme }) => ({
    height: "100%",
    width: "65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: `0.3rem solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("md")]: {
        borderRight: `0`,
        borderBottom: `0.3rem solid ${theme.palette.primary.main}`,
        width: "100%",
        maxHeight: "50%",
    },
    img: {
        maxWidth: "85%",
        maxHeight: "85%",
        [theme.breakpoints.down("md")]: {
            maxWidth: "65%",
            maxHeight: "80%",
        },
    },
}));

export const StyledRightDetailsContainer = styled("div")(({ theme }) => ({
    marginLeft: "50px",
    gap: "15px",
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        marginLeft: "0",
    },

    div: {
        span: {
            fontSize: "1.2rem",
            fontWeight: "bold",
        },
    },
    ul: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem",
        },
    },
}));

export const StyledIngredientsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    ".ingredient-list-container": {
        height: "100%",
    },
    ul: {
        marginTop: "15px",
        maxWidth: "4rem",
    },
}));
