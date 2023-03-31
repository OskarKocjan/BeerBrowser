export const getMoreBeerDataPage = (
    pageNumber: number,
    beersPerPage: number,
    length: number,
) => {
    return !(pageNumber % 5) && pageNumber * beersPerPage === length;
};

export const objToArray = (obj: any) => {
    if (!obj) return [];
    return Object.keys(obj).map((key) => obj[key]);
};

export const getNames = (arrOfObj: any) => {
    let arrOfNames = [];
    for (const item of arrOfObj) {
        arrOfNames.push(item.name);
    }
    return Array.from(new Set(arrOfNames as string[]));
};
