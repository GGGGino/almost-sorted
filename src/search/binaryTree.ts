import { Node } from '../../types/Sort';

/**
 * @return node
 */
function createTree<T>(root: Node<T> | null | undefined, value: T): Node<T> {
  if (!root) {
    return { value, height: 1 };
  }

  if (value < root.value) {
    root.left = createTree(root.left, value);
  }
  if (value > root.value) {
    root.right = createTree(root.right, value);
  }

  root.height = getHeight(root) + 1;

  return root;
}

function getHeight<T>(root?: Node<T>): number {
  if (!root) { return 0; }

  return Math.max(root.left?.height || 0, root.right?.height || 0);
}

export function create<T>(array: T[]) {
  let root: Node<T> | null = null;

  for (const item of array) {
    root = createTree(root, item);
  }

  return root;
}
