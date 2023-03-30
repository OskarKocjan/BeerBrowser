import { AgeConfirmationProps } from "models/AgeConfirmationModels";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { StyledBox, StyledModal } from "./styled";

const AgeConfirmation: React.FC<AgeConfirmationProps> = () => {
    const [openModal, setOpenModal] = useState(true);

    return (
        <StyledModal open={openModal} onClose={() => setOpenModal(false)}>
            <StyledBox>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                </Typography>
            </StyledBox>
        </StyledModal>
    );
};

export default AgeConfirmation;
