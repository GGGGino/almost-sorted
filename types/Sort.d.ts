export interface Node<T> {
  value: T;
  right?: Node<T>;
  left?: Node<T>;
}

export type ComparisionResult = -1 | 0 | 1;

export type Compare<T> = (first: T, second: T) => ComparisionResult;

export type SearchCB<T> = (value: T) => ComparisionResult;
