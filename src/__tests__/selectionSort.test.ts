import {selectionsort} from '../index';
import {ComparisionResult} from "../enums";

test('pippo', () => {
  const sortedArray = selectionsort([1,2,4,5,3], ((first: any) => first));
  expect(sortedArray).toStrictEqual([1,2,3,4,5]);
});
