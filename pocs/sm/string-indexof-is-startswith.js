const strings = [
  "",
  "a", "b",
  "ab", "ba", "ac", "ca",
  "aba", "abb", "abc", "aca",
];

function StringIndexOf(str, searchStr) {
  
  with ({});
  return str.indexOf(searchStr);
}

for (let str of strings) {
  for (let searchStr of strings) {
    let startsWith = str.indexOf(searchStr) === 0;

    print(startsWith, str.startsWith(searchStr));
    print(startsWith, StringIndexOf(str, searchStr) === 0);

    let notStartsWith = str.indexOf(searchStr) !== 0;

    print(notStartsWith, !str.startsWith(searchStr));
    print(notStartsWith, StringIndexOf(str, searchStr) !== 0);
  }
}
