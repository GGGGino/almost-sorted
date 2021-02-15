export type ComparisionResult = -1 | 0 | 1;

export type Compare<T> = (first: T, second: T) => ComparisionResult;

export type KeyRetrivier = (element: any) => any;
