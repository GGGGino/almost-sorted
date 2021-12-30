import { SearchCB, Node } from '../../types/Sort';
export declare function balance<T>(root: Node<T> | null | undefined): Node<T> | null;
export declare function getSubTree<T>(root: Node<T> | null | undefined, callback: SearchCB<T>): Node<T> | null;
export default function binaryTree<T>(array: T[]): Node<T> | null;
