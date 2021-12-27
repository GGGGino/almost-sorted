import { SearchCB, Node } from '../../types/Sort';

/**
 * @return node
 */
function createTree<T>(root: Node<T> | null | undefined, value: T): Node<T> {
  if (!root) {
    return { value };
  }

  if (value < root.value) {
    root.left = createTree(root.left, value);
  }
  if (value > root.value) {
    root.right = createTree(root.right, value);
  }

  return root;
}

/**
 * Rotate the tree/subtree to the left
 */
function leftRotation<T>(root?: Node<T>): Node<T> | undefined {
  if (!root || !root.right) {
    return;
  }

  const pivot = root.right;
  root.right = pivot.left;
  pivot.left = root;

  return pivot;
}

/**
 * Rotate the tree/subtree to the right
 */
function rightRotation<T>(root?: Node<T>): Node<T> | undefined {
  if (!root || !root.left) {
    return;
  }

  const pivot = root.left;
  root.left = pivot.right;
  pivot.right = root;

  return pivot;
}

function balanceNode<T>(root: Node<T> | null | undefined): number {
  if (!root) {
    return 0;
  }

  const leftHeight = balanceNode(root.left);
  const rightHeight = balanceNode(root.right);

  const difference = leftHeight - rightHeight;

  if (difference < -1) {
    root = leftRotation(root);
  }
  if (difference > 1) {
    root = rightRotation(root);
  }

  return 1 + Math.max(leftHeight, rightHeight);
}

export function balance<T>(root: Node<T> | null | undefined): Node<T> | null {
  if (!root) {
    return null;
  }

  balanceNode(root);

  return root;
}

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

export default function binaryTree<T>(array: T[]) {
  let root: Node<T> | null = null;

  for (const item of array) {
    root = createTree(root, item);
  }

  return root;
}
