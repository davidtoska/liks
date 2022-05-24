import { S } from './s';

describe('S -> String utils', () => {
  it('word chars works', () => {
    expect(S.countChar('dette er alle aenene i aaa', 'a')).toEqual(5);
    expect(S.countChar('dette er  ', 'a')).toEqual(0);
    expect(S.countChar('dette er', 'e')).toEqual(3);
  });

  it('Regex testing', () => {
    const str = 'ab. cd?? xy.';
    const matces = str.match(new RegExp('\\.|\\?', 'g')) ?? [];
    console.log(matces);
    expect(matces.length).toEqual(4);
  });
});
