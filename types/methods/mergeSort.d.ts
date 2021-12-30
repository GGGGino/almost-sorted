import { Compare } from '../../types/Sort';
export default function mergeSort<T>(array: T[], callback: Compare<T>): T[];
