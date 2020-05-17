export interface ProductFilter {
    minPrice?: number;
    maxPrice?: number;
    categoriesId?: number[];
    colorsId?: number[];
    search?: string;
    date?: RecentDate;
    orderByPrice?: 'asc' | 'desc';
}

export enum RecentDate {
    LASTWEEK = 1,
    THISMONTH = 2,
    LASTMONTH = 3
}
