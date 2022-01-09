import {binary, getArraySorted, getSubTree} from '../index';
import testData from './testData';
import {AsciiTree} from "oo-ascii-tree";
import {Node} from '../../types/Sort'

const transformObjToAsciiTree = function<T>(root: Node<T>): AsciiTree {
  const children: AsciiTree[] = [];

  if (root.left) { children.push(transformObjToAsciiTree(root.left)); }
  if (root.right) { children.push(transformObjToAsciiTree(root.right)); }

  return new AsciiTree(String(root.value + '.' + root.height), ...children);
};

test('binarySearch', () => {
  const arrayTests: { confused: number[]; ordered: number[] }[] = [testData.numbers[2]];

  for (const test of arrayTests) {
    const tree = binary.create(test.confused);

    const subTree = getSubTree<number>(tree, value => {
      if (value < 4) {
        return 1;
      }
      if (value > 4) {
        return -1;
      }

      return 0;
    });

    const myAsciiTree = transformObjToAsciiTree(tree!);

    expect(getArraySorted(tree!)).toStrictEqual(test.ordered);
  }
});
