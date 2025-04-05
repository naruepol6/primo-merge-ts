export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const merged: number[] = [];

  let i = 0, j = 0, k = collection_3.length - 1;

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const vals: number[] = [];

    if (i < collection_1.length) {
      vals.push(collection_1[i]);
    }
    if (j < collection_2.length) {
      vals.push(collection_2[j]);
    }
    if (k >= 0) {
      vals.push(collection_3[k]);
    }

    const min = Math.min(...vals);

    if (i < collection_1.length && collection_1[i] === min) {
      merged.push(collection_1[i]);
      i++;
    } else if (j < collection_2.length && collection_2[j] === min) {
      merged.push(collection_2[j]);
      j++;
    } else if (k >= 0 && collection_3[k] === min) {
      merged.push(collection_3[k]);
      k--;
    }
  }

  return merged;
}
