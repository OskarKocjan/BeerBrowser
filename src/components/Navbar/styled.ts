import { styled } from "@mui/material/styles";
import { Link, SwipeableDrawer } from "@mui/material";
import { ToggleButton } from "@mui/material";

export const StyledNavBar = styled("nav")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    position: "absolute",
    width: "100vw",
    top: 0,
    height: "6rem",
    backgroundColor: theme.palette.primary.light,
    transition: "background-color 0.25s ease-in-out",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
    },
    opacity: 0.75,

    boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 10px",

    [theme.breakpoints.down("md")]: {
        height: "4.5rem",
    },

    ".navbar-left": {
        marginLeft: "4rem",
        gap: "2rem",
        width: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        height: "100%",

        [theme.breakpoints.down("md")]: {
            marginLeft: "2rem",
        },
        a: {
            [theme.breakpoints.down("md")]: {
                display: "none",
            },
        },
    },
    ".navbar-center": {
        height: "100%",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        a: {
            textDecoration: "inherit",
            color: "inherit",
        },
    },
    ".navbar-right": {
        marginRight: "4rem",
        width: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        [theme.breakpoints.down("md")]: {
            marginRight: "2rem",
        },
    },
}));

export const StyledMenuToggleButton = styled(ToggleButton)(({ theme }) => ({
    display: "none",

    [theme.breakpoints.down("md")]: {
        display: "inline-block",
    },
}));

export const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    fontSize: "2rem",
    opacity: 0.88,
    a: {
        margin: "2rem",
    },
}));

export const StyledNavLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    margin: "5px",
    display: "block",
    position: "relative",
    color: theme.palette.primary.contrastText,
    width: "max-content",
    "&::after": {
        content: "''",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "0.1em",
        backgroundColor: theme.palette.primary.contrastText,
        opacity: 0,
        transition: "opacity 300ms, transform 300ms",
        transform: "translate3d(-65%, 0, 0)",
    },
    "&:hover::after, &:focus::after": {
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
    },
    "&:active": {
        marginBottom: "1px",
        [theme.breakpoints.down("md")]: {
            margin: "2rem",
            color: "#808080",
        },
    },
}));
