import {mergeSort} from '../index';
import testData from './testData';

test('mergeSort', () => {
  const arrayTests: {confused: any[], ordered: any[]}[] = testData.numbers;

  for (const test of arrayTests) {
    const sortedArray = mergeSort(test.confused, ((first: any, second: any) => {
      if(first > second) { return 1; }
      if(first < second) { return -1;}
      return 0;
    }));

    expect(sortedArray).toStrictEqual(test.ordered);
  }
});
