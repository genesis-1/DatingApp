export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

/** PaginatedResult is a class that maintains the Pagination information
 * and the user information.
 */
 export class PaginatedResult <T>
 {
    result: T;
    pagination: Pagination;
 }