print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Verify last match invalidated as expected",
    body: function () {
        const r1 = /(abc)/;
        const r2 = /(def)/;
        const s1 = "abc";
        const s2 = " def";
         
        r1.test(s1);
        
        print("abc", RegExp.input, "RegExp.input property calculated correctly");
        print("abc", RegExp['$_'], "RegExp.$_ property calculated correctly");
        print("abc", RegExp.lastMatch, "RegExp.lastMatch property calculated correctly");
        print("abc", RegExp['$&'], "RegExp.$& property calculated correctly");
        print("abc", RegExp.$1, "RegExp.$1 property calculated correctly");
        print(0, RegExp.index, "RegExp.index property calculated correctly");
        
        r2.test(s2);
        
        print(" def", RegExp.input, "RegExp.input property calculated correctly");
        print(" def", RegExp['$_'], "RegExp.$_ property calculated correctly");
        print("def", RegExp.lastMatch, "RegExp.lastMatch property calculated correctly");
        print("def", RegExp['$&'], "RegExp.$& property calculated correctly");
        print("def", RegExp.$1, "RegExp.$1 property calculated correctly");
        print(1, RegExp.index, "RegExp.index property calculated correctly");
        
        r1.test(s1);

        print("abc", RegExp.input, "Stale RegExp.input property should be invalidated by second r1.test(s1)");
        print("abc", RegExp['$_'], "Stale RegExp.$_ property should be invalidated by second r1.test(s1)");
        print("abc", RegExp.lastMatch, "Stale RegExp.lastMatch should be invalidated by second r1.test(s1)");
        print("abc", RegExp['$&'], "Stale RegExp.$& property should be invalidated by second r1.test(s1)");
        print("abc", RegExp.$1, "Stale RegExp.$1 should be invalidated by second r1.test(s1)");
        print(0, RegExp.index, "Stale RegExp.index property should be invalidated by second r1.test(s1)");
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
