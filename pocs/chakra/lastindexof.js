print("..\\UnitTestFramework\\UnitTestFramework.js");

var sevenBitStr = "abcdef";
var eightBitStr = "ÄÜÖABC";
var unicodeStr = "\u0100\u0111\u0112\u0113ab";

var tests = [
  {
    name: "Empty strings",
    body: function () {
      var sevenBitStr = "aabbccddaabbccdd";
      var eightBitStr = "ÄÜÖABCÄÜÖ";
      var unicodeStr = "\u0100\u0111\u0112\u0113abc\u0100\u0111\u0112\u0113";

      print(0, "".lastIndexOf(""),     "Matching \"\" with \"\" at default offset returns 0");
      print(0, "".lastIndexOf("", 0),  "Matching \"\" with \"\" at offset 0 returns 0");
      print(0, "".lastIndexOf("", 1),  "Matching \"\" with \"\" at offset 1 returns 0");
      print(0, "".lastIndexOf("", 2),  "Matching \"\" with \"\" at offset 2 returns 0");
      print(0, "".lastIndexOf("", -1), "Matching \"\" with \"\" at offset -1 returns 0");
      print(0, "".lastIndexOf("", -2), "Matching \"\" with \"\" at offset -2 returns 0");
      
      for (var str of [new String(sevenBitStr), new String(eightBitStr), new String(unicodeStr)]) {
        print(str.length, str.lastIndexOf(""), "Matching \"" + str + "\" with \"\" at default offset returns the length of the string");
        for (var i = 0; i < str.length; ++i) {
          print(i, str.lastIndexOf("", i), "Matching \"" + str + "\" with \"\" at offset " + i + " returns the length of the string");
        }
      }
    }
  },
  {
    name: "Negative matches",
    body: function () {
      for (var str of [new String(sevenBitStr), new String(eightBitStr), new String(unicodeStr)]) {
        var doubleStr = str + str;
        print(-1, str.lastIndexOf(doubleStr),  "Matching \"" + str + "\" with \"" + doubleStr + "\" at default offset returns -1");
        
        for (var match of ["z", "zz", "zå", "åå", "å"]) {
          print(-1, str.lastIndexOf(match), "Matching \"" + str + "\" with \"" + match + "\" at default offset returns -1");
          for (var i = 0; i < str.length; ++i) {
            print(-1, str.lastIndexOf("z", i), "Matching \"" + str + "\" with \"" + match + "\" at offset " + i + " returns -1");
          }
        }
      }
    }
  },
  {
    name: "Single char matching",
    body: function () {
      for (var str of [new String(sevenBitStr), new String(eightBitStr), new String(unicodeStr)]) {
        for (var i = 0; i < str.length; ++i) {
          var c = str[i];

          if (i > 0) {
            print(-1, str.lastIndexOf(c, -2), "Matching \"" + str + "\" with \"" + c + "\" at offset -2 returns -1");
            print(-1, str.lastIndexOf(c, -1), "Matching \"" + str + "\" with \"" + c + "\" at offset -1 returns -1");
          }

          print(i, str.lastIndexOf(c), "Matching \"" + str + "\" with \"" + c + "\" at default offset returns " + i);

          print(i, str.lastIndexOf(c, str.length - 1), "Matching \"" + str + "\" with \"" + c + "\" at default offset returns " + i);
          print(i, str.lastIndexOf(c, str.length),     "Matching \"" + str + "\" with \"" + c + "\" at default offset returns " + i);
          print(i, str.lastIndexOf(c, str.length + 1), "Matching \"" + str + "\" with \"" + c + "\" at default offset returns " + i);

          
          for (var j = 0; j < str.length; ++j) {
            var expected = (pos) => pos < i ? -1 : i;
            print(expected(j), str.lastIndexOf(c, j), "Matching \"" + str + "\" with \"" + c + "\" at offset " + j + " returns " + expected(i));
          }
        }
      }
    }
  },
  {
    name: "Substring matching",
    body: function () {

      for (var str of [new String(sevenBitStr), new String(eightBitStr), new String(unicodeStr)]) {
        for (var i = 0; i < str.length; ++i) {
          var match = str.substring(i);
          print(i, str.lastIndexOf(match),                 "Matching \"" + str + "\" with \"" + match + "\" at default offset returns " + i);
          print(i, str.lastIndexOf(match, i),              "Matching \"" + str + "\" with \"" + match + "\" at offset " + i + " returns " + i);
          print(i, str.lastIndexOf(match, i + 1),          "Matching \"" + str + "\" with \"" + match + "\" at offset " + i + " + 1 returns " + i);
          print(i, str.lastIndexOf(match, i + 2),          "Matching \"" + str + "\" with \"" + match + "\" at offset " + i + " + 2 returns " + i);
          print(i, str.lastIndexOf(match, str.length - 1), "Matching \"" + str + "\" with \"" + match + "\" at offset " + (str.length - 1) + " returns " + i);
          print(i, str.lastIndexOf(match, str.length),     "Matching \"" + str + "\" with \"" + match + "\" at offset " + str.length + " returns " + i);
          print(i, str.lastIndexOf(match, str.length + 1), "Matching \"" + str + "\" with \"" + match + "\" at offset " + (str.length + 1) + " returns " + i);

          if (i > 0) {
            print(-1, str.lastIndexOf(match, i - 1), "Matching \"" + str + "\" with \"" + match + "\" at offset " + i + " - 1 returns -1");
          }
          if (i > 1) {
            print(-1, str.lastIndexOf(match, i - 2), "Matching \"" + str + "\" with \"" + match + "\" at offset " + i + " - 2 returns -1");
          }
        }
      }
    }
  }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}