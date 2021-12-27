import { insertionSort } from '../index';
import testData from './testData';

test('insertionSort', () => {
  const arrayTests: { confused: number[]; ordered: number[] }[] = testData.numbers;

  for (const test of arrayTests) {
    const sortedArray = insertionSort(test.confused, (first: number, second: number) => {
      if (first > second) {
        return 1;
      }
      if (first < second) {
        return -1;
      }
      return 0;
    });

    expect(sortedArray).toStrictEqual(test.ordered);
  }
});
