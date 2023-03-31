import { styled } from "@mui/material";

export const StyledMainDetailsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8rem",
    height: "30rem",
}));

export const StyledLeftDetailsContainer = styled("div")(({ theme }) => ({
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: `0.3rem solid ${theme.palette.primary.main}`,
    img: {
        maxWidth: "75%",
        maxHeight: "75%",
        [theme.breakpoints.down("md")]: {
            maxHeight: "55%",
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

    div: {
        span: {
            fontSize: "1.2rem",
            fontWeight: "bold",
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
