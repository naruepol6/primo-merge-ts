import { merge } from '../src/merge';

describe('merge()', () => {
  it('handles normal collections into ascending order', () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [9, 7, 0];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  it('handles empty collections', () => {
    expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
    expect(merge([1], [], [])).toEqual([1]);
  });

  it('handles all empty collections', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it('handles collections with duplicate values', () => {
    const c1 = [1, 3, 3];
    const c2 = [2, 3, 4];
    const c3 = [3, 3, 0];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([0, 1, 2, 3, 3, 3, 3, 3, 4]);
  });

  it('handles collections with negative numbers', () => {
    const c1 = [-3, -1, 0];
    const c2 = [-2, 2, 4];
    const c3 = [3, 1, -4];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([-4, -3, -2, -1, 0, 1, 2, 3, 4]);
  });
});
