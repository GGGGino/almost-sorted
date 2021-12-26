import {binaryTree, getSubTree} from '../index';
import testData from './testData';
import {balance} from "../search/binaryTree";

test('binarySearch', () => {
  const arrayTests: {confused: any[], ordered: any[]}[] = testData.numbers;

  for (const test of arrayTests) {
    const tree = binaryTree(test.confused);

    const subTree = getSubTree<number>(tree, (value) => {
      if (value < 4) { return 1; }
      if (value > 4) { return -1; }

      return 0;
    });

    const rotated = balance(tree);

    expect(test.ordered).toStrictEqual(test.ordered);
  }
});
