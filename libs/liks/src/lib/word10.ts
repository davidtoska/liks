import { data, WordEntry } from './data/word10t';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Word10 {
  export const TOTAL_COUNT = data.reduce((acc, curr) => acc + curr.count, 0);
  const WORD_List = data.map((item) => item.word);
  const WORD_SET = new Set(WORD_List);
  export const contains = (word: string) => {
    return WORD_SET.has(word);
  };

  // export const SET = new Set(data)

  export const validOrThrow = () => {
    if (WORD_SET.size !== 10000) {
      throw Error();
    }
    if (WORD_List.length !== 10000) {
      throw Error();
    }
    console.log(TOTAL_COUNT);
  };
}

Word10.validOrThrow();
