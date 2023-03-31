import { StyledPagination } from "./styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { PaginationProps } from "models/PaginationModels";

const Pagination: React.FC<PaginationProps> = ({
    pageNumber,
    setPageNumber,
}) => {
    const changePageNumber = (pageNumber: number, how: number) => {
        if (pageNumber === 1 && how === -1) return;
        setPageNumber(pageNumber + how);
    };

    return (
        <StyledPagination>
            <Button onClick={() => changePageNumber(pageNumber, -1)}>
                <ChevronLeftIcon />
            </Button>
            <div className="page-number-container">{pageNumber}</div>
            <Button onClick={() => changePageNumber(pageNumber, 1)}>
                <ChevronRightIcon />
            </Button>
        </StyledPagination>
    );
};

export default Pagination;
