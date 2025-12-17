function makeComparator(code) {
  var str = String.fromCharCode(code);

  return Function("ch", "code", `
    print(ch == "${str}", code == ${code} && ch.length == 1);
    print(ch != "${str}", code != ${code} || ch.length != 1);

    print(ch < "${str}", code < ${code} || (code == ${code} && ch.length < 1));
    print(ch <= "${str}", code < ${code} || (code == ${code} && ch.length <= 1));
    print(ch > "${str}", code > ${code} || (code == ${code} && ch.length > 1));
    print(ch >= "${str}", code > ${code} || (code == ${code} && ch.length >= 1));
  `);
}

function testCompare(strings, comparator) {
  
  with ({}) ;

  for (let i = 0; i < 1000; ++i) {
    let str = strings[i % strings.length];

    comparator("", -1);

    for (let j = 0; j < str.length; ++j) {
      let ch = str.charAt(j);
      let code = str.charCodeAt(j);

      comparator(ch, code);
      comparator(ch + "A", code);
    }
  }
}


testCompare([
  "",
  "a", "b", "c",
  "a-", "b-", "c-",
  "a\u{100}", "b\u{100}", "c\u{100}",
], makeComparator(0x62));


testCompare([
  "",
  "a", "b", "c",
  "a-", "b-", "c-",
  "\u{fe}", "\u{ff}", "\u{100}",
  "\u{fe}-", "\u{ff}-", "\u{100}-",
], makeComparator(0xff));


testCompare([
  "",
  "a", "b", "c",
  "a-", "b-", "c-",
  "\u{100}", "\u{101}", "\u{102}",
  "\u{100}-", "\u{101}-", "\u{102}-",
], makeComparator(0x101));
