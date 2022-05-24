import { data } from './data/word10t';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Word10 {
  const TOTAL_COUNT = data.reduce((acc, curr) => acc + curr.count, 0);
  /**
   * Number of words in sample
   * @private
   */
  const SAMPLE_SIZE = 150_000_000;
  const WORD_List = data.map((item) => item.word);
  const WORD_SET = new Set(WORD_List);

  const calculateStats = (list: typeof data) => {
    let cumAbs = 0;
    const stats: ReadonlyArray<WordStats> = data.map((item, index) => {
      cumAbs = cumAbs + item.count;
      const cum = (cumAbs / SAMPLE_SIZE) * 100;
      const rel = (item.count / SAMPLE_SIZE) * 100;
      const stat: WordStats = {
        word: item.word,
        length: item.word.length,
        abs: item.count,
        rang: index,
        rel,
        cum,
      };
      return stat;
    });
    return stats;
  };

  const WORD_STATS: ReadonlyArray<WordStats> = calculateStats(data);

  interface WordStats {
    readonly word: string;
    readonly length: number;
    readonly rang: number;
    readonly abs: number;
    readonly rel: number;
    readonly cum: number;
  }

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

    if (WORD_STATS.length !== 10000) {
      throw Error();
    }

    WORD_STATS.forEach((item) => {
      // console.log(item.rel);
    });
    // console.log(TOTAL_COUNT);
    // console.log(WORD_STATS.length);
  };
}

// Word10.validOrThrow();
