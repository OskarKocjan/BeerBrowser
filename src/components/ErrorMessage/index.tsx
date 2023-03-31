import { StyledErrorMessage } from "./styled";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorMessage = () => {
    return (
        <StyledErrorMessage>
            I'm sorry, this page does not exist.
            <ErrorIcon sx={{ fontSize: "3.5rem" }} />
        </StyledErrorMessage>
    );
};

export default ErrorMessage;
