function testEmpty() {
  var strings = [
    "",
    "a",
    "ab",
  ];

  for (var i = 0; i < 200; ++i) {
    var str = strings[i % strings.length];
    print(str.lastIndexOf(""), str.length);
  }
}
testEmpty();

function testSingle() {
  var strings = [
    "",

    "a",
    "b",

    "aa",
    "ab",
    "ba",
    "bb",
  ];

  var searchStrings = [
    "a",
    "b",
  ];

  for (var i = 0; i < 200; ++i) {
    var str = strings[i % strings.length];
    var searchString = searchStrings[i % searchStrings.length];

    var j = str.length;
    while (--j >= 0 && str[j] !== searchString);

    print(str.lastIndexOf(searchString), j);
  }
}
testSingle();

function testDouble() {
  var strings = [
    "",

    "a",
    "b",

    "aa",
    "ab",
    "ba",
    "bb",

    "aaa",
    "aab",
    "aba",
    "abb",
    "baa",
    "bab",
    "bba",
    "bbb",

    "aaaa",
    "aaab",
    "aaba",
    "aabb",
    "abaa",
    "abab",
    "abba",
    "abbb",

    "baaa",
    "baab",
    "baba",
    "babb",
    "bbaa",
    "bbab",
    "bbba",
    "bbbb",
  ];

  var searchStrings = [
    "aa",
    "ab",
    "ba",
    "bb",
  ];

  for (var i = 0; i < 200; ++i) {
    var str = strings[i % strings.length];
    var searchString = searchStrings[i % searchStrings.length];

    var j = str.length;
    while (--j >= 0 && (str[j] !== searchString[0] || str[j + 1] !== searchString[1]));

    print(str.lastIndexOf(searchString), j);
  }
}
testDouble();
