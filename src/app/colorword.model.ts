var tinycolor = require('tinycolor2');

export class ColorWord{
  length: number;
  rgba: any;
  lum: number;
  hue: number;
  fontColor : string;

  constructor(
    public word: string,
    public hex: string
  ){
    this.length = word.length;
    this.rgba = tinycolor(hex);
    this.lum = this.rgba.getLuminance();
    this.fontColor = ((0.213 * this.rgba._r + 0.715 * this.rgba._g + 0.072 * this.rgba._b) < 0.5 && this.rgba._a >   0.25) ? 'white' : 'black';
  }
}
