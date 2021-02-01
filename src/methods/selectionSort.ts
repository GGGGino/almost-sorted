import {KeyRetrivier} from "../../types/Sort";

export default function(array: any, callback: KeyRetrivier) {
  for (let i = 0; i < array.length; i++) {
    let minorI = i;
    for (let k = i+1; k < array.length; k++) {
      if (callback(array[k]) < callback(array[minorI])) {
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
