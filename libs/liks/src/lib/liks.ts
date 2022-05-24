import { S } from './s';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Liks {
  const LONG_WORD_LIMIT = 6;
  const isLongWord = (word: string) => word.length > LONG_WORD_LIMIT;
  const isShortWord = (word: string) => word.length <= LONG_WORD_LIMIT;

  export interface Scale {
    readonly label: string;
    readonly description: string;
  }

  const getScale = (liks: number) => {
    if (liks < 30) return scale[0];
    if (liks <= 40) return scale[1];
    if (liks <= 50) return scale[2];
    if (liks <= 60) return scale[3];
    return scale[4];
  };

  const scale: Record<0 | 1 | 2 | 3 | 4, Scale> = {
    0: {
      label: ' < 30',
      description: 'Veldig lettlest, som barnebøker',
    },

    1: {
      label: '30-40',
      description: 'Lettlest, som skjønnlitteratur eller ukeblader',
    },
    2: {
      label: '40-50',
      description: 'Middels vanskelig, som vanlig avistekst',
    },
    3: {
      label: '50-60',
      description: 'Vanskelig, vanlig verdi for offisielle tekster',
    },
    4: {
      label: ' > 60',
      description: 'Veldig tunglest byråkratspråk',
    },
  } as const;

  interface WordStats {
    readonly category: 'long' | 'short';
    readonly text: string;
    readonly count: number;
  }

  export interface Score {
    readonly text: string;
    readonly wordCount: number;
    readonly longWordsCount: number;
    readonly charCount: number;
    readonly sentences: number;
    readonly sections: number;
    readonly wordStats: ReadonlyArray<WordStats>;
    readonly liks: {
      readonly grade: number;
      readonly label: Scale['label'];
      readonly description: Scale['description'];
    };
  }

  const getWords = (text: string): ReadonlyArray<string> =>
    text.trim().split(' ').filter(S.notEmpty);

  const countWords = (text: string): number => getWords(text).length;

  /**
   * Will trim the text
   * @param text
   */
  const countLetters = (text: string): number => {
    const trimmed = text.trim();
    // const ae = S.countChar(text, 'æ');
    // const oe = S.countChar(text, 'ø');
    // const aa = S.countChar(text, 'å');
    return trimmed.length;
  };

  /**
   * Todo. Add colon??
   * @param text
   */
  const countSentences = (text: string): number => {
    const regex = new RegExp('\\.|\\?', 'g');
    const splitted = text.match(regex) ?? [];
    return splitted.length;
  };

  const getWordStats = (words: ReadonlyArray<string>): WordStats[] => {
    const countMap = new Map<string, number>();
    words.forEach((w) => {
      const count = (countMap.get(w) ?? 0) + 1;
      countMap.set(w, count);
    });
    const unique = Array.from(new Set(words));
    const result = unique
      .map((word) => {
        const category: WordStats['category'] =
          word.length > LONG_WORD_LIMIT ? 'long' : 'short';
        const stats: WordStats = {
          text: word,
          count: countMap.get(word) ?? 0,
          category,
        };
        return stats;
      })
      .sort((w1, w2) => w2.count - w1.count);

    return result;
  };
  const getLongWords = (text: string): string[] =>
    getWords(text).filter(isLongWord);

  /**
   * LIX = (a/b) + (c*100/a)
   * a: Number of words.
   * b: Number of sentence-terminators. (Big letter, :, .)
   * c: Number of long words (more than 6.)
   * @param text
   */
  export const score = (text: string): Score => {
    const wordList = getWords(text);
    const wordCount = countWords(text);
    const charCount = countLetters(text);
    const sentences = countSentences(text);
    const longWordsList = getLongWords(text);
    const longWordsCount = longWordsList.length;

    // Algorithm
    const liksNumber = Math.round(
      wordCount / sentences + (longWordsCount * 100) / wordCount
    );

    const scale = getScale(liksNumber);
    const { label, description } = scale;
    return {
      text,
      wordCount,
      charCount,
      wordStats: getWordStats(wordList),
      longWordsCount,
      sections: 0,
      liks: { grade: liksNumber, label, description },
      sentences,
    };
  };
}
