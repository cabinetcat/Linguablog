// string text = TextGlitchy.Generate(text, 10, 3 ?);
// string text = TextGlitchy.Generate(text, 10, 3, {TextGlitchy.extraparams.disable_latin_extensions, TextGlitchy.disable_diacritics_above} );
// TextGlitchy text = new TextGlitchy(TextGlitchy.TargetScript.Cyrillic, 10, 3);
import * as myModule from 'unicharadata.js';

export class TextGlitchy {
  private default_params: TextGlitchy.Extra_Params = {
    keep_diacritics: false,
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
  private combranges: number[][] = [
  [0x0300, 0x036F],
  [0x1DC0, 0x1DFF],
  [0x20D0, 0x20FF],
  ];
  private latextensions: {
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
  private cyrextensions: {
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
  private _text: string;
  private _deviation: number = 0;

  constructor(targetscript: TextGlitchy.Targetscript = TextGlitchy.Targetscript.Latin) {
      this.target = targetscript;
  }
  private parseUnicodeBlocks()
  {
    let datatoparse;
    fetch(this.unicodedataset)
    .then(response => response.text())
    .then(text => {
    datatoparse = text.split('\n');
  });
  }

    private randomWithMedian(median: number, deviation: number): number {
      let u = 0;
      while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
      return median + deviation * Math.sqrt(-2.0 * Math.log(u));
    }
  public Generate(text: string, median: number, deviation: number, extra_params: TextGlitchy.Extra_Params = this.default_params): string {

      //distribution = 0 to 1, with zero being an equal distribution of alterations
      //max = max alterations to character
      //extra = max alterations to character
      this._deviation = (deviation) ? deviation : this._deviation;
      this._text = (text) ? text : this._text;
      this._median = median;
      let text_buffer = text
      let glitchtext = String();

      let alterations
      //generate mask
      this.randomWithMedian(median, deviation);
      let maska, maskb, maskc = this.randomWithMedian(median, deviation));
      let chars = this.getFullCharacters(text);
        chars.forEach((element, index, array) => {
           //mask 
          array[index] = this.applyGlitch(element) 
        });
      return chars.join();

  };
  //add more unicode blocks to this!
private getNonCombiningChars(s: string): string[] {
  // this function basically filters a string to keep only non-combining characters, aka full-height characters
    let result: string[] = [];
    let cursor = 0;
    let code = 0;
    while (cursor < s.length) {
      let c = s.charAt(cursor);
      let j = cursor + 1;
      let ranges = this.combranges;
      while(j < s.length)
      {
        code = s.charCodeAt(j);
        while(ranges.length)
        {
          
        }
        for(let k = 0; k < ranges.length; k++)
        {
          if (code >= ranges[k][0] && code <= ranges[k][1])
          {
            c += s.charAt(j);
            break;
          }
        }
        j++;
      }
      

      result.push(c);

      cursor = j;
    }
    return result;
  }

  private applyGlitch(char: string):string
  {

    //check how many combining diacritics are attatched to base text
    return 'hi';
  }
}
export namespace TextGlitchy {

  export enum Targetscript {
      Latin,
      Cyrillic
  }
  export interface Extra_Params {
      source-block?: string,
      keep_diacritics?: boolean,
      disable_latin_extensions?: boolean,
      disable_diacritics_above?: boolean,
      disable_diacritics_below?: boolean
  }
}