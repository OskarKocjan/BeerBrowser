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
    borderRight: `0.5rem solid ${theme.palette.primary.main}`,
    img: {
        maxWidth: "75%",
        maxHeight: "75%",
        [theme.breakpoints.down("md")]: {
            maxHeight: "55%",
        },
    },
}));

export const StyledRightDetailsContainer = styled("div")(({ theme }) => ({
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // borderLeft: `1rem solid ${theme.palette.primary.contrastText}`,
}));
