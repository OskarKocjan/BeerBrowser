import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    gap: 20,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 150,
    border: "2px solid #000",
    borderRadius: "5px",
    backgroundColor: "hsl(0,0%,0%,85%)",
    color: "#e8c65a",
    boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    ".btn-container": {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
    },
}));

export const StyledModal = styled(Modal)(({ theme }) => ({
    backgroundColor: "hsl(0,0%,0%,65%)",
}));
