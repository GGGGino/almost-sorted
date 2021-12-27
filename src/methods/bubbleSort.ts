import { Compare } from '../../types/Sort';

export default function <T>(array: T[], callback: Compare<T>) {
  for (let i = 0; i < array.length; i++) {
    let minorI = i;
    for (let k = i + 1; k < array.length; k++) {
      if (callback(array[k], array[minorI]) < 0) {
        minorI = k;
      }
    }
    if (minorI !== i) {
      const temp = array[i];
      array[i] = array[minorI];
      array[minorI] = temp;
    }
  }

  return array;
}
