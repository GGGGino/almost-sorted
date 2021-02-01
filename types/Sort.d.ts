export type ComparisionResult = 0 | 1 | -1;

export type Comparision = (first: any, second: any) => ComparisionResult;

export type KeyRetrivier = (element: any) => any;
