import { Compare } from '../../types/Sort';
import { halfIndex } from '../utils';

/*
 * This function given 2 array it builds one array by merging and sorting them
 * ┌───┐   ┌───┐
 * │20 ├─┬─┤12 │
 * └───┘ │ └───┘
 *       │
 *   ┌───▼───┐
 *   │12 │20 │
 *   └───┴───┘
 */
function partition<T>(left: T[], right: T[], compare: Compare<T>): T[] {
  const result: T[] = [];

  while (left.length > 0 || right.length > 0) {
    if (left.length === 0) {
      return result.concat(right);
    }
    if (right.length === 0) {
      return result.concat(left);
    }

    if (compare(left[0], right[0]) < 0) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  return result;
}

/*
 * This subfunction recursive call itself to break up the array into small pieces(2),
 * then call the partition function that sort the array
 *    0   1   2   3
 *  ┌───┬───┬───┬───┐
 *  │20 │12 │10 │15 │
 *  └──┬┴───┴───┴┬──┘
 * ┌───▼───┐ ┌───▼───┐
 * │20 │12 │ │10 │15 │
 * └───┴───┘ └───┴───┘
 */
export default function mergeSort<T>(array: T[], callback: Compare<T>): T[] {
  if (array.length === 1) {
    return array;
  }

  const halfLimit = halfIndex(array);

  const leftPart = mergeSort(array.slice(0, halfLimit), callback);
  const rightPart = mergeSort(array.slice(halfLimit, array.length), callback);

  return partition(leftPart, rightPart, callback);
}
