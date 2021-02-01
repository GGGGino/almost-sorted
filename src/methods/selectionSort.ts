import {Comparision, ComparisionResult} from "../../types/Sort";

export default function(array: any, callback: Comparision) {
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < (array.length - i); k++) {
      const result: ComparisionResult = callback(array[i], array[k]);

      if (result === ComparisionResult.Equal) { continue; }
      if (result === ComparisionResult.Minor) { continue; }
      if (result === ComparisionResult.Major) {
        const tempVar = array[i];
        array[i] = array[k];
        array[k] = tempVar;
      }
    }
  }

  return array;
}
