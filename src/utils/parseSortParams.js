import { SORT_ORDER, SORT_BY } from '../constants/index.js';

const parseSortBy = (param) => {
    if (SORT_BY.includes(param)) return param;
    return '_id';
};

const parseSortOrder = (param) => {
    if ([SORT_ORDER.ASC, SORT_ORDER.DESC].includes(param)) return param;
    return SORT_ORDER.ASC;
};

export const parseSortParams = ({ sortBy, sortOrder }) => {
    const parsedSortBy = parseSortBy(sortBy);
    const parsedSortOrder = parseSortOrder(sortOrder);

    return { sortBy: parsedSortBy, sortOrder: parsedSortOrder };
};
