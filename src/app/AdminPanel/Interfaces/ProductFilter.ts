export interface ProductFilter {
    minPrice?: number;
    maxPrice?: number;
    categoryId?: number;
    colorId?: number;
    search?: string;
    orderByPrice?: 'asc' | 'desc';
}