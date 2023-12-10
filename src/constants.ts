export const PREAMBLE = `// arr: number[]
// setIndex: (index: number, value: number) => Promise<void>
async function sort(arr, setIndex) {`;

export const STARTER_BLANK = `  // implement me
  // await setIndex(0, 123);`;

export const STARTER_BUBBLE_SORT = `  let swaps;
  do {
    swaps = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          let tmp = arr[i];
          await setIndex(i, arr[i - 1]);
          await setIndex(i - 1, tmp);
          swaps++;
        }
    }
  } while (swaps > 0);`;

export const POSTAMBLE = "}";

export const GRAPH_WIDTH = 1000;
export const GRAPH_HEIGHT = 500;
