import { styled } from "@mui/material";

export const StyledMainContentContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
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
}));
