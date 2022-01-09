/* eslint-disable  @typescript-eslint/no-non-null-assertion */

import { binary, getArraySorted, getSubTree } from '../index';
import testData from './testData';
import { AsciiTree } from 'oo-ascii-tree';
import { Node } from '../../types/Sort';
import { baseCompare } from '../utils';

const transformObjToAsciiTree = function <T>(root: Node<T>): AsciiTree {
  const children: AsciiTree[] = [];

  if (root.left) {
    children.push(transformObjToAsciiTree(root.left));
  }
  if (root.right) {
    children.push(transformObjToAsciiTree(root.right));
  }

  return new AsciiTree(String(root.value + '.' + root.height), ...children);
};

test('binarySearch', () => {
  const arrayTests: { confused: number[]; ordered: number[] }[] = [testData.numbers[2]];

  for (const test of arrayTests) {
    const tree = binary.create(test.confused, baseCompare);

    expect(getArraySorted(tree!)).toStrictEqual(test.ordered);
  }
});


test('binarySearch subtree', () => {
  const arrayTests: { confused: number[]; ordered: number[] }[] = [testData.numbers[2]];

  for (const test of arrayTests) {
    const tree = binary.create(test.confused, baseCompare);

    const subTree = getSubTree<number>(tree, value => {
      const numberToFind = 4;

      if (value < numberToFind) {
        return 1;
      }
      if (value > numberToFind) {
        return -1;
      }

      return 0;
    });

    expect(4).toStrictEqual(subTree!.value);
  }
});
