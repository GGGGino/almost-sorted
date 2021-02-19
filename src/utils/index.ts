export function swap(array: any[], firstIndex: number, secondIndex: number) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

export function halfIndex<T>(array: T[]) {
  return Math.ceil(array.length/2);
}
