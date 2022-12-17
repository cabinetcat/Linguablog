// string text = TextGlitchy.Generate(text, 10, 3 ?);
// string text = TextGlitchy.Generate(text, 10, 3, {TextGlitchy.extraparams.disable_latin_extensions, TextGlitchy.disable_diacritics_above} );
// TextGlitchy text = new TextGlitchy(TextGlitchy.TargetScript.Cyrillic, 10, 3);
class eTextGlitchy
{

const unicodedataset = 'https://unicode.org/Public/UNIDATA/UnicodeData.txt'
const samplingblocks = 
[
  [0x0250, 0x02AF],
  [0xAB30, 0xAB6F],
  [0xA720, 0xA7FF]
];
// table for looking up addresses of letters, including capitals
let latinextensions: { [key: string]: string | any[] } = {
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
    'k': 'kra',
    'l': 'lum',
    'm': 'mum',
    'n': ['num', 'eng'],
    'o': ['closed omega', 'ou'],
    'p': 'phi',
    'q': '',
    'r': 'yr',
    's': 'eth',
    't': 'eth',
    'u': 'eth',
    'v': 'eth', 
    'w': 'eth',
    'x': 'chi',
    'y': 'eth',
    'z': 'eth',

    
  }
  #cyrillicextensions = {
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
    'k': 'kra',
    'l': 'lum',
    'm': 'mum',
    'n': ['num', 'eng'],
    'o': ['closed omega', 'ou'],
    'p': 'phi',
    'q': '',
    'r': 'yr',
    's': 'eth',
    't': 'eth',
    'u': 'eth',
    'v': 'eth', 
    'w': 'eth',
    'x': 'chi',
    'y': 'eth',
    'z': 'eth',

    
  }
  public enum Targetscript {
    Latin,
    Cyrillic
  }
  interface Extra_Params {
    disable_latin_extensions,
    disable_diacritics_above,
    disable_diacritics_below
  }
  #Diacriticsbelow = [];
  #target

  constructor(Targetscript?: TargetScript, ) {
    #target = target
    parse_unicodeblocks()
  }

#parse_unicodeblocks()
{
  var unicodedata = []
  $.get(unicodedataset, function(data) {
    unicodedata = data.split('/\r?\n/')
 });
 for (var i = 0; i < unicodedata.length; i++)
 {
    if (unicodedata[i])
    {

    }
 }
for (var i = 0; i < unicodedata.length; i++)
 {
  
 }

}




  function Generate(text, percent, limit, Extra_params = {})
  {

    //percent = chance that each character will be fully zalgo-ified
    //limit = max alterations to character
    //extra = max alterations to character

    let text_buffer = text
    //generate mask
    for (let i = 0; i < text.length; i++)
    {
      let maska = Math.round(1 * (percent/100) * Math.random()) * extra_params['enable_latin_extensions']  // latin extensions
      let maskb = Math.round(limit * (percent/100) * Math.random()) * extra_params['enable_diacritics_above'] // diacritics above
      let maskc = Math.round(limit * (percent/100) * Math.random()) * extra_params['enable_diacritics_below'] //diacritics below
      for (let j = 0; j < limit; j++)
      {
          ++++++++++++++++++++++++++++++++++++++++
      }
    }
  };

}