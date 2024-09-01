interface PaginationProps<T> {
  data: T[];
  page: number;
  limit: number;
}

export const usePagination = <T>({ data, page, limit }: PaginationProps<T>) => {
  return data.slice((page - 1) * limit, page * limit);
};
