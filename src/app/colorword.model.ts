import {tinycolor} from 'tinycolor2';

export class ColorWord{
  length: number;
  rgba: string;
  constructor(
    public word: string,
    public hex: string
  ){
    this.length = word.length;
    this.rgba = tinycolor(hex);
    }
}
