/**
 * @param {string[]} words
 * @param {string} parts
 */
function findSubstrings(words, parts) {
  parts = parts.filter(p => words.some(w => w.includes(p)));
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    let r = {};
    let h = 0;

    for (let p of parts) {
      if (w.includes(p)) {
        r[p] = p.length;
        if (h < p.length) {
          h = p.length;
        }
      }
    }
    let t = Object.keys(r)
      .filter(p => r[p] == h)
      .map(p => {
        return { p, i: w.indexOf(p) };
      })
      .sort((x, y) => x.i - y.i)[0];
    if (t) words[i] = w.replace(t.p, `[${t.p}]`);
  }
  return words;
}

let a = findSubstrings(
  [
    'neuroses',
    'myopic',
    'sufficient',
    'televise',
    'coccidiosis',
    'gules',
    'during',
    'construe',
    'establish',
    'ethyl'
  ],
  [
    'aaaaa',
    'Aaaa',
    'E',
    'z',
    'Zzzzz',
    'a',
    'mel',
    'lon',
    'el',
    'An',
    'ise',
    'd',
    'g',
    'wnoVV',
    'i',
    'IUMc',
    'P',
    'KQ',
    'QfRz',
    'Xyj',
    'yiHS'
  ]
);
console.log(a);
