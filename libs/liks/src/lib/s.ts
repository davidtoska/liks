// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace S {
  export type Char =
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'j'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'o'
    | 'p'
    | 'q'
    | 'r'
    | 's'
    | 't'
    | 'u'
    | 'v'
    | 'x'
    | 'y'
    | 'z'
    | 'æ'
    | 'ø'
    | 'å';

  export const isEmpty = (str: string): boolean => str.length === 0;
  export const notEmpty = (str: string): boolean => !isEmpty(str);
  export const isSpace = (str: string): boolean => str === ' ';

  export const countChar = (text: string, char: Char): number => {
    const regex = new RegExp(char, 'g');
    const list = text.match(regex) || [];
    return list.length;
  };
}
