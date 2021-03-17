
export interface IMarvelDataResponse<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
