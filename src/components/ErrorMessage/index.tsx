import { StyledErrorMessage } from "./styled";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const ErrorMessage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate("/");
        }, 6000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [navigate]);

    return (
        <StyledErrorMessage>
            I'm sorry, this page does not exist.
            <ErrorIcon sx={{ fontSize: "3.5rem" }} />
        </StyledErrorMessage>
    );
};

export default ErrorMessage;
