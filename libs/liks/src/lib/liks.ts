// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Liks {
  export interface Score {
    wordCount: number;
    charCount: number;
    sentences: number;
    sections: number;
    liks: {
      grade: number;
      description: string;
    };
  }
  type FrequencyList = Array<{ word: string; count: number }>;
  export const score = (text: string): Score => {
    const score = Math.floor(Math.random() * 80);
    return {
      wordCount: 10,
      charCount: 0,
      sections: 0,
      liks: { grade: score, description: '' },
      sentences: 0,
    };
  };
}
