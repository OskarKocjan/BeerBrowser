import { styled } from "@mui/material";
import backgroundBeer from "images/beerBackground.jpg";

export const ImageHolder = styled("div")(({ theme }) => ({
    backgroundImage: `url(${backgroundBeer})`,
    height: "80vh",
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
}));
