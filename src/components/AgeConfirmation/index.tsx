import { AgeConfirmationProps } from "models/AgeConfirmationModels";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { StyledBox, StyledModal } from "./styled";
import Button from "@mui/material/Button";

const AgeConfirmation: React.FC<AgeConfirmationProps> = () => {
    const [openModal, setOpenModal] = useState(true);
    let show = sessionStorage.getItem("age");

    if (show) return <></>;

    return (
        <StyledModal disableEscapeKeyDown open={openModal}>
            <StyledBox>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you 18 or older?
                </Typography>
                <div className="btn-container">
                    <Button
                        variant="contained"
                        onClick={() => {
                            setOpenModal(false);
                            sessionStorage.setItem("age", "true");
                        }}
                    >
                        Yes
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() =>
                            window.location.replace(
                                "https://www.niaaa.nih.gov/alcohols-effects-health/alcohols-effects-body",
                            )
                        }
                    >
                        No
                    </Button>
                </div>
            </StyledBox>
        </StyledModal>
    );
};

export default AgeConfirmation;
