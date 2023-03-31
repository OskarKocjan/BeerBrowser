import { styled } from "@mui/material";

export const StyledErrorMessage = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "25px",
    fontSize: "3.5rem",
    marginTop: "10vh",
    height: "150px",
    width: "100%",
    textAlign: "center",
}));
