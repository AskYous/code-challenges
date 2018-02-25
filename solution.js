/**
 * @param {string[]} words
 * @param {string} parts
 */
function findSubstrings(words, parts) {
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    let r = {};
    let h = 0;

    for (let p of parts) {
      if (w.includes(p)) {
        r[p] = p.length;
        if (h < p.length) h = p.length;
      } else r[p] = 0;
    }

    let t = parts
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
  ['Aaaaaaaaa', 'bcdEFGh', 'Apple', 'Melon', 'Orange', 'Watermelon'],
  []
);
console.log(a);
