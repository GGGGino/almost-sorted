export enum ComparisionResult {
  Equal = 0,
  Major = 1,
  Minor = -1
}

export type Comparision = (first: any, second: any) => ComparisionResult;
