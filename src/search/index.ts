import { Node, SearchCB } from '../../types/Sort';
import * as Binary from './binaryTree';
import * as Avl from './avlTree';

export const avl = Avl;
export const binary = Binary;

/**
 * Get sub tree based on the value passed
 */
export function getSubTree<T>(root: Node<T> | null | undefined, callback: SearchCB<T>): Node<T> | null {
  if (!root) {
    return null;
  }

  if (callback(root.value) === -1) {
    return getSubTree(root.left, callback);
  }
  if (callback(root.value) === 1) {
    return getSubTree(root.right, callback);
  }

  return root;
}

/**
 * Return array sorted
 */
export function getArraySorted<T>(root: Node<T> | null | undefined): T[] {
  if (!root) {
    return [];
  }

  let values: T[] = [];

  if (root.left) {
    values = [...values, ...getArraySorted(root.left)];
  }

  values = [...values, root.value];

  if (root.right) {
    values = [...values, ...getArraySorted(root.right)];
  }

  return values;
}
