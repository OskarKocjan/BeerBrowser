import { styled } from "@mui/material";
import styledComponent from "styled-components";
import backgroundBeer from "images/beerBackground.jpg";

export const ImageHolder = styled("div")(({ theme }) => ({
    backgroundImage: `url(${backgroundBeer})`,
    fontFamily: '"Source Sans Pro", sans-serif',
    height: "70vh",
    width: "100vw",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 10%",
    [theme.breakpoints.down("md")]: {
        height: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
        height: "30vh",
    },

    "@keyframes typing": {
        from: { width: 0 },
        to: { width: "100%" },
    },
    "@keyframes blink-caret": {
        from: { borderColor: "transparent" },
        to: { borderColor: "transparent" },
        "50%": { borderColor: "black" },
    },

    h1: {
        [theme.breakpoints.down("md")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.15rem",
            marginTop: "3.5rem",
        },

        "@media only screen and (max-height: 330px)": {
            opacity: 0,
        },
    },
}));

export const TypeWriter = styledComponent.h1`
    overflow: hidden; 
    border-right: 0.15em solid black;
    white-space: nowrap; 
    margin: 0 auto; 
    letter-spacing: 0.15em;
    animation: typing 3s steps(20), blink-caret 0.75s step-end infinite;
    font-size: clamp(1rem, 3vw + 1rem, 4rem);
    font-family: "Source Code Pro", monospace;
    width: max-content;
`;
