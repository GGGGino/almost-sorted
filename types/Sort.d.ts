export enum ComparisionResult {
  Equal = 0,
  Major = 1,
  Minor = -1
}

export declare function comparision(first: any, second: any): ComparisionResult;
