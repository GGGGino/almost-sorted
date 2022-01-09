import { ComparisionResult } from "../../types/Sort";

/**
 * Given an *array* swap the element at *firstIndex* with the one at *secondIndex*
 */
export function swap<T>(array: T[], firstIndex: number, secondIndex: number) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

/**
 * Find the half length of an array
 */
export function halfIndex<T>(array: T[]): number {
  return Math.ceil(array.length / 2);
}

/**
 * Base compare function that order by simple comparing the entire value
 */
 export function baseCompare<T>(first: T, second: T): ComparisionResult {
  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
}
