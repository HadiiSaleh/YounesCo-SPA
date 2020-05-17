import { User } from './User';

export interface PagedUsers {
  results: User[];
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  filter: string;
  sortDirection: string;
}
