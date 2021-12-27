import {Compare} from "../../types/Sort";
import {swap} from "../utils";

/*
 * Loop all items to find the lowest/greatest
 * and put it in first position.
 *
 *   0   1   2   3
 * ┌───┬───┬───┬───┐
 * │20 │12 │10 │15 │ minI=1
 * └─┬─┴─▲─┴───┴───┘
 *   └───┘
 * ┌───┬───┬───┬───┐
 * │20 │12 │10 │15 │ minI=2
 * └───┴─┬─┴─▲─┴───┘
 *       └───┘
 * ┌───┬───┬───┬───┐
 * │20 │12 │10 │15 │ minI=2
 * └───┴───┴─┬─┴─▲─┘
 *           └───┘
 * ┌───┬───┬───┬───┐
 * │20 │12 │10 │15 │ swapI:2->0
 * └─▲─┴───┴─┬─┴───┘
 *   └───────┘
 */
export default function<T>(array: T[], callback: Compare<T>) {
  for (let i = 0; i < array.length; i++) {
    let minorI = i;

    for (let k = i+1; k < array.length; k++) {
      if (callback(array[k], array[minorI]) < 0) {
        minorI = k;
      }
    }

    if (minorI !== i) {
      swap(array, i, minorI);
    }
  }

  return array;
}
