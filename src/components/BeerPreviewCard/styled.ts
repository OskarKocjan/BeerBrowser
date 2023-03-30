import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    height: "35rem",
    width: "100%",
    justifyContent: "center",
    img: {
        maxWidth: "85%",
        maxHeight: "85%",
        objectFit: "scale-down",
    },
}));
