import { Compare, Node } from '../../types/Sort';

/**
 * @return node
 */
function insert<T>(root: Node<T> | undefined, value: T, compare: Compare<T>): Node<T> {
  if (!root) {
    return { value, height: 1 };
  }

  if (compare(value, root.value) < 0) {
    root.left = insert(root.left, value, compare);
  }
  if (compare(value, root.value) > 0) {
    root.right = insert(root.right, value, compare);
  }

  const balance = getBalance(root);

  // Left Right Rotation
  if (root.left && balance > 1 && getBalance(root.left) <= -1) {
    root.left = leftRotation(root.left);
    root = rightRotation(root);
  }
  // Right Rotation
  if (root.left && balance > 1 && getBalance(root.left) >= 1) {
    root = rightRotation(root);
  }

  // Left Right Rotation
  if (root.right && balance < -1 && getBalance(root.right) >= 1) {
    root.right = rightRotation(root.right);
    root = leftRotation(root);
  }
  // Right Rotation
  if (root.right && balance < -1 && getBalance(root.right) <= -1) {
    root = leftRotation(root);
  }

  root.height = calculateHeight(root) + 1;

  return root;
}

function getHeight<T>(root?: Node<T>): number {
  if (!root) {
    return 0;
  }

  return root.height;
}

function calculateHeight<T>(root?: Node<T>): number {
  if (!root) {
    return 0;
  }

  return Math.max(root.left?.height || 0, root.right?.height || 0);
}

function getBalance<T>(root?: Node<T>): number {
  if (!root) {
    return 0;
  }

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  return leftHeight - rightHeight;
}

/**
 * Rotate the tree/subtree to the left
 */
function leftRotation<T>(root: Node<T>): Node<T> {
  const pivot = root.right;

  if (!pivot) { return root; }
  
  root.right = pivot.left;
  pivot.left = root;

  pivot.left.height = calculateHeight(pivot.right) + 1;
  pivot.height = calculateHeight(pivot) + 1;

  return pivot;
}

/**
 * Rotate the tree/subtree to the right
 */
function rightRotation<T>(root: Node<T>): Node<T> {
  const pivot = root.left;

  if (!pivot) { return root; }

  root.left = pivot.right;
  pivot.right = root;

  pivot.right.height = calculateHeight(pivot.right) + 1;
  pivot.height = calculateHeight(pivot) + 1;

  return pivot;
}

export function create<T>(array: T[], compare: Compare<T>) {
  let root: Node<T> | undefined;

  for (const item of array) {
    root = insert(root, item, compare);
  }

  return root;
}
