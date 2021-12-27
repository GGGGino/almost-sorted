import { Compare } from '../../types/Sort';
import { swap } from '../utils';

/*
 * For every item in the loop, if is lower/greater than the previous item put it in that position
 *
 *   0   1   2   3
 * ┌───┬───┬───┬───┐
 * │ 5 │ 8 │ 3 │ 1 │
 * └─▲─┴───┴─┬─┴───┘
 *   └───────┘
 * ┌───┬───┬───┬───┐
 * │ 3 │ 8 │ 5 │ 1 │
 * └─▲─┴───┴───┴─┬─┘
 *   └───────────┘
 * ┌───┬───┬───┬───┐
 * │ 1 │ 3 │ 8 │ 5 │
 * └───┴───┴───┴───┘
 */
export default function <T>(array: T[], callback: Compare<T>) {
  for (let i = 1; i < array.length; i++) {
    let rightPlace = false;
    for (let k = i; k >= 0 && !rightPlace; k--) {
      if (callback(array[k], array[k - 1]) < 0) {
        swap(array, k, k - 1);
      } else {
        rightPlace = true;
      }
    }
  }

  return array;
}
