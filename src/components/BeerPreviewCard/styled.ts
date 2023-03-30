import { styled } from "@mui/material/styles";
import { Card, CardContent } from "@mui/material";

export const StyledContentCard = styled(CardContent)(({ theme }) => ({
    display: "flex",
    height: "30rem",
    width: "100%",
    gap: "10px",
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",

    img: {
        maxWidth: "75%",
        maxHeight: "75%",
        [theme.breakpoints.down("md")]: {
            maxHeight: "55%",
        },
    },
    span: {
        width: "85%",
    },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    height: "30rem",
    width: "100%",
    margin: "0 auto",
    transition: "box-shadow 0.3s",
    [theme.breakpoints.down("md")]: {
        height: "25rem",
        width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "70%",
    },
    "&:hover": {
        cursor: "pointer",
        boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    },
}));
