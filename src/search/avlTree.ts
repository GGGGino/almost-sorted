import { Node } from '../../types/Sort';

/**
 * @return node
 */
function insert<T>(root: Node<T> | undefined, value: T): Node<T> {
  if (!root) {
    return { value, height: 1 };
  }

  if (value < root.value) {
    root.left = insert(root.left, value);
  }
  if (value > root.value) {
    root.right = insert(root.right, value);
  }

  const balance = getBalance(root);

  // Left Right Rotation
  if (balance > 1 && getBalance(root.left) <= -1) {
    root.left = leftRotation(root.left);
    root = rightRotation(root)!;
  }
  // Right Rotation
  if (balance > 1 && getBalance(root.left) >= 1) {
    root = rightRotation(root)!;
  }

  // Left Right Rotation
  if (balance < -1 && getBalance(root.right) >= 1) {
    root.right = rightRotation(root.right);
    root = leftRotation(root)!;
  }
  // Right Rotation
  if (balance < -1 && getBalance(root.right) <= -1) {
    root = leftRotation(root)!;
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

function balanceNode<T>(root: Node<T> | null | undefined): Node<T> | undefined {
  if (!root) {
    return undefined;
  }

  if (root.left) {
    root.left = balanceNode(root.left);
  }

  if (root.right) {
    root.right = balanceNode(root.right);
  }

  const balance = getBalance(root);
  let newRoot: Node<T> | undefined;

  // right Rotation
  if (balance > 1) {
    console.log('rightRotation');
    newRoot = rightRotation(root);
  }

  // left Rotation
  if (balance < -1) {
    console.log('left', root.value, balance);
    newRoot = leftRotation(root);
  }
  // left right Rotation
  // right left Rotation

  if (!newRoot) {
    newRoot = root;
  }

  newRoot.height = calculateHeight(newRoot) + 1;

  return newRoot;
}

function balance<T>(root: Node<T> | null | undefined): Node<T> | null {
  if (!root) {
    return null;
  }

  return balanceNode(root)!;
}

export function create<T>(array: T[]) {
  let root: Node<T> | undefined;

  for (const item of array) {
    root = insert(root, item);
  }

  return root;
}
