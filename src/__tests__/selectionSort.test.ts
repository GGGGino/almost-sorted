import {selectionsort} from '../index';
import testData from "./testData";

test('selectionSort', () => {
  const arrayTests: {confused: any[], ordered: any[]}[] = testData.numbers;

  for (const test of arrayTests) {
    const sortedArray = selectionsort(test.confused, ((first: any, second: any) => {
      if(first > second) { return 1; }
      if(first < second) { return -1;}
      return 0;
    }));
    expect(sortedArray).toStrictEqual(test.ordered);
  }
});
