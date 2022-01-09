import { Node, SearchCB } from "../../types/Sort";
import * as Binary from "./binaryTree";
import * as Avl from "./avlTree";
export declare const avl: typeof Avl;
export declare const binary: typeof Binary;
export declare function getSubTree<T>(root: Node<T> | null | undefined, callback: SearchCB<T>): Node<T> | null;
export declare function getArraySorted<T>(root: Node<T> | null | undefined): T[];
