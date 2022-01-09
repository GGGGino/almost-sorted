import { Compare, Node } from '../../types/Sort';

/**
 * @return node
 */
function insert<T>(root: Node<T> | null | undefined, value: T, compare: Compare<T>): Node<T> {
  if (!root) {
    return { value, height: 1 };
  }

  if (compare(value, root.value) < 0) {
    root.left = insert(root.left, value, compare);
  }
  if (compare(value, root.value) > 0) {
    root.right = insert(root.right, value, compare);
  }

  root.height = getHeight(root) + 1;

  return root;
}

function getHeight<T>(root?: Node<T>): number {
  if (!root) {
    return 0;
  }

  return Math.max(root.left?.height || 0, root.right?.height || 0);
}

export function create<T>(array: T[], compare: Compare<T>) {
  let root: Node<T> | null = null;

  for (const item of array) {
    root = insert(root, item, compare);
  }

  return root;
}
