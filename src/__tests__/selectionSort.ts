import {selectionsort} from '../index'
import {ComparisionResult} from '../../types/Sort';

test('pippo', () => {
  expect(selectionsort([1,2,4,5,3], ((first, second) => 1))).toBe([1,2,4,5,3]);
});
