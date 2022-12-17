// string text = TextGlitchy.Generate(text, 10, 3 ?);
// string text = TextGlitchy.Generate(text, 10, 3, {TextGlitchy.extraparams.disable_latin_extensions, TextGlitchy.disable_diacritics_above} );
// TextGlitchy text = new TextGlitchy(TextGlitchy.TargetScript.Cyrillic, 10, 3);
class TextGlitchy
{
private unicodedataset: string = 'https://unicode.org/Public/UNIDATA/UnicodeData.txt';
private samplingblocks: number[][] = 
[
  [0x0250, 0x02AF],
  [0xAB30, 0xAB6F],
  [0xA720, 0xA7FF]
];
private latinextensions: { [key: string]: string | any[] } = {
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
private cyrillicextensions: { [key: string]: string | any[] } = {
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
};

enum Targetscript {
  Latin,
  Cyrillic
}
}