export interface PaginationProps {
    pageNumber: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    numberOfBeersOnPage: number;
}
