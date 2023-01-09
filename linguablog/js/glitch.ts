// string text = TextGlitchy.Generate(text, 10, 3 ?);
// string text = TextGlitchy.Generate(text, 10, 3, {TextGlitchy.extraparams.disable_latin_extensions, TextGlitchy.disable_diacritics_above} );
// TextGlitchy text = new TextGlitchy(TextGlitchy.TargetScript.Cyrillic, 10, 3);
export class TextGlitchy {
  private const default_params: TextGlitchy.Extra_Params = {
    disable_latin_extensions: false,
    disable_diacritics_above : false,
    disable_diacritics_below : false
  };

  private unicodedataset: string = 'https://unicode.org/Public/UNIDATA/UnicodeData.txt';
  private samplingranges: number[][] = [
      [0x0250, 0x02AF],
      [0xAB30, 0xAB6F],
      [0xA720, 0xA7FF]
  ];
  private combiningcharranges: number[][] = [
  [0x0300, 0x036F],
  [0x1DC0, 0x1DFF],
  [0x20D0, 0x20FF],
  ];
  private latinextensions: {
      [key: string]: string | any[]
  } = {
      'a': 'alpha',
      'b': 'beta',
      'c': '',
      'd': ['eth', 'dum', 'delta'],
      'e': 'schwa',
      'f': '',
      'g': ['gamma', 'gha'],
      'h': ['heng', 'hwair'],
      'i': 'iota',
      'j': '',
      'k': '',
      'l': 'lum',
      'm': '',
      'n': ['num', 'eng'],
      'o': ['closed omega', 'ou'],
      'p': 'phi',
      'q': '',
      'r': ['rum', 'yr'],
      's': 'esh',
      't': '',
      'u': ['upsilon', 'sha'],
      'v': 'vend',
      'w': '',
      'x': 'chi',
      'y': '',
      'z': 'ezh',
  }
  private cyrillicextensions: {
      [key: string]: string | any[]
  } = {
      'a': 'alpha',
      'b': 'beta',
      'c': '',
      'd': ['eth', 'dum', 'delta'],
      'e': 'schwa',
      'f': '',
      'g': ['gamma', 'gha'],
      'h': ['heng', 'hwair'],
      'i': 'iota',
      'j': '',
      'k': '',
      'l': 'lum',
      'm': '',
      'n': ['num', 'eng'],
      'o': ['closed omega', 'ou'],
      'p': 'phi',
      'q': '',
      'r': ['rum', 'yr'],
      's': 'esh',
      't': '',
      'u': ['upsilon', 'sha'],
      'v': 'vend',
      'w': '',
      'x': 'chi',
      'y': '',
      'z': 'ezh',
  }

  private target: TextGlitchy.Targetscript;
  private _extra_params: TextGlitchy.Extra_Params;
  private _median: number = 0;
  private _text: string = new String();
  private _deviation: number = 0;

  constructor(targetscript: TextGlitchy.Targetscript = TextGlitchy.Targetscript.Latin) {
      this.target = targetscript;
  }
  private parseUnicodeBlocks()
  {
    let datatoparse;
    fetch(unicodedataset)
    .then(response => response.text())
    .then(text => {
    datatoparse = text.split('\n');
  });
  }

    private randomWithMedian(median: number, deviation: number): number {
      let u = 0, v = 0;
      while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
      while(v === 0) v = Math.random();
      return median + deviation * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }
  public Generate(text: string, median: number, deviation: number, extra_params: TextGlitchy.Extra_Params = this.default_params): string {

      //distribution = 0 to 1, with zero being an equal distribution of alterations
      //max = max alterations to character
      //extra = max alterations to character
      this._deviation = deviation;
      this._text = text;
      this._median = median;
      let text_buffer = text
      let glitchtext = String();
      //generate mask
      let maska = this.randomWithMedian(median, );
      let maskb = Math.random() < probability ? 1 : 0;
      let chars = this.getFullCharacters(text);
      for(let i = 0; i < chars.length; i++)
      {
        chars[i] = applyGlitch(chars[i]);

      }
      chars.forEach(function(c) {
        glitchtext += c;
      });
      return glitchtext;

  };
private getFullCharacters(s: string): string[] {
    let result: string[] = [];
    let i = 0;
    while (i < s.length) {
      let c = s.charAt(i);
      let j = i + 1;
      while (j < s.length && s.charCodeAt(j) >= 0x300 && s.charCodeAt(j) <= 0x36F) {
        c += s.charAt(j);
        j++;
      }
      result.push(c);
      i = j;
    }
    return result;
  }

  private applyGlitch(char: string)
  {

    //check how many combining diacritics are attatched to base text

  }
}
export namespace TextGlitchy {

  export enum Targetscript {
      Latin,
      Cyrillic
  }
  export interface Extra_Params {
      keep_diacritics?: boolean,
      disable_latin_extensions?: boolean,
      disable_diacritics_above?: boolean,
      disable_diacritics_below?: boolean
  }
}