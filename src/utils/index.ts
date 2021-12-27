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
