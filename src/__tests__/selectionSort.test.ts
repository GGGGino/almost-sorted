import {selectionsort} from '../index';

test('selectionSort', () => {
  const sortedArray = selectionsort([1,2,4,5,3], ((first: any, second: any) => {
    if(first > second) { return 1; }
    if(first < second) { return -1;}
    return 0;
  }));
  expect(sortedArray).toStrictEqual([1,2,3,4,5]);
});
