export const getMoreBeerDataPage = (
    pageNumber: number,
    beersPerPage: number,
    length: number,
) => {
    return !(pageNumber % 5) && pageNumber * beersPerPage === length;
};
