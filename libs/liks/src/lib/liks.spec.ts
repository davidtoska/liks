import { Liks } from './liks';

interface GoldStandard {
  readonly text: string;
  readonly wordCount: number;
  readonly sentences: number;
  readonly chars: number;
  readonly actualLiks: number;
  readonly sections: number;
}

const one: GoldStandard = {
  wordCount: 54,
  chars: 258,
  actualLiks: 15,
  sentences: 7,
  sections: 1,
  text: 'Vi vil vite hvordan du har det på jobb. Derfor ønsker vi å stille deg noen spørsmål. Er du trygg på jobb? Trives du på jobb? Får du si hva du mener når du er på jobb? Har du gode kollegaer på jobb? Dine svar kan hjelpe oss til å gjøre din arbeidsplass bedre.',
};

const two: GoldStandard = {
  wordCount: 61,
  chars: 301,
  actualLiks: 19,
  sentences: 5,
  sections: 1,
  text: 'Det er viktig at du kan glede deg til å komme på jobb. Å føle at en gjør en god jobb. Det er vanlig at noe på jobben er kjekt mens andre ting kan være litt kjedelig. Det kan være lurt å ha forskjellige arbeidsoppgaver, for da blir en ikke så fort lei. Når arbeidsoppgavene er gode, trives jeg på jobb. ',
};
const three: GoldStandard = {
  actualLiks: 28,
  chars: 151,
  wordCount: 30,
  sentences: 2,
  sections: 1,
  text: 'Du har rett til å være med på   å bestemme på jobb. Det skal være faste møter hvor du kan si hva du mener, ha samtaler med personal eller arbeidsleder.',
};
const goldList: ReadonlyArray<GoldStandard> = [one, two, three];

describe('Score works', () => {
  it('Will not mutate original text (trim)', () => {
    const text = 'dette er en tekst   ';
    const firstCount = text.length;
    const score = Liks.score(text);
    const secondCount = text.length;
    expect(firstCount).toBe(secondCount);
    expect(text).toEqual(score.text);
  });
  it('word count works', () => {
    goldList.forEach((item) => {
      const score = Liks.score(item.text);
      expect(score.wordCount).toBe(item.wordCount);
    });
  });

  it('Letter count works', () => {
    goldList.forEach((item) => {
      const score = Liks.score(item.text);
      expect(score.charCount).toEqual(item.chars);
    });
  });

  it('Sentence count works', () => {
    goldList.forEach((item) => {
      const score = Liks.score(item.text);
      expect(score.sentences).toEqual(item.sentences);
    });
  });

  it('Count long words', () => {
    const text = '8a8a8a8a bb ddd dkf sksks pppppp 7a7a7aa 9a9a9a9aa';
    const score = Liks.score(text);
    expect(score.longWordsCount).toEqual(3);
  });

  it('Liks score works', () => {
    goldList.forEach((item) => {
      const score = Liks.score(item.text);
      expect(score.liks.grade).toEqual(item.actualLiks);
    });
  });

  it('Get words works', () => {
    const text = 'Hva tenker du?';
    const words = Liks.getWords(text);
    expect(words.length).toBe(3);
    expect(words[2]).toBe('du');
    expect(Liks.getWords('hei du.')[1]).toBe('du');
    expect(Liks.getWords('hva tenker du, da?')[2]).toBe('du');
    expect(Liks.getWords('Tenk du!')[1]).toBe('du');
    expect(Liks.getWords('Tenk du!!')[1]).toBe('du');
    expect(Liks.getWords('Tenk du!')[0]).toBe('Tenk');
  });
});
