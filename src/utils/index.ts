export function swap(array: any[], firstI: number, secondI: number) {
  const temp = array[firstI];
  array[firstI] = array[secondI];
  array[secondI] = temp;
}

export function halfIndex<T>(array: T[]) {
  return Math.ceil(array.length/2);
}
