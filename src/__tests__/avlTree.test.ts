import {avl, getSubTree} from '../index';
import testData from './testData';
import {AsciiTree} from "oo-ascii-tree";
import {Node} from '../../types/Sort'

const transformObjToAsciiTree = function<T>(root: Node<T>): AsciiTree {
  const children: AsciiTree[] = [];

  if (root.left) { children.push(transformObjToAsciiTree(root.left)); }
  if (root.right) { children.push(transformObjToAsciiTree(root.right)); }

  return new AsciiTree(String(root.value + '.' + root.height), ...children);
};

test('avlSearch', () => {
  const arrayTest: { confused: number[]; ordered: number[] } = testData.numbers[2];

  const tree = avl.create(arrayTest.confused);

  expect(tree!.right!.right!.value).toBe(10);
  expect(tree!.right!.value).toBe(6);
  expect(tree!.left!.right!.value).toBe(3);
});
