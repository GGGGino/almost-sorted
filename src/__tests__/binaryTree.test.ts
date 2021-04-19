import {binaryTree, getSubTree} from '../index';
import testData from './testData';
import {balance} from "../search/binaryTree";

test('binarySearch', () => {
  const arrayTests: {confused: any[], ordered: any[]}[] = testData.numbers;

  for (const test of arrayTests) {
    const tree = binaryTree(test.confused);

    console.log(JSON.stringify(tree));

    const subTree = getSubTree<number>(tree, (value) => {
      if (value < 4) { return 1; }
      if (value > 4) { return -1; }

      return 0;
    });

    // console.log(JSON.stringify(subTree));

    const rotated = balance(tree);

    console.log(JSON.stringify(rotated));

    expect(test.ordered).toStrictEqual(test.ordered);
  }
});
