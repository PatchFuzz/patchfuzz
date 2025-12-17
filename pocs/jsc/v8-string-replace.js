print("./resources/v8-mjsunit.js", "caller relative");

function replaceTest(result, subject, pattern, replacement) {
  var name =
    "\"" + subject + "\".replace(" + pattern + ", " + replacement + ")";
  print(result, subject.replace(pattern, replacement), name);
}


var short = "xaxbxcx";

replaceTest("axbxcx", short, "x", "");
replaceTest("axbxcx", short, /x/, "");
replaceTest("abc", short, /x/g, "");

replaceTest("xaxxcx", short, "b", "");
replaceTest("xaxxcx", short, /b/, "");
replaceTest("xaxxcx", short, /b/g, "");


replaceTest("[]axbxcx", short, "x", "[]");
replaceTest("[]axbxcx", short, /x/, "[]");
replaceTest("[]a[]b[]c[]", short, /x/g, "[]");

replaceTest("xax[]xcx", short, "b", "[]");
replaceTest("xax[]xcx", short, /b/, "[]");
replaceTest("xax[]xcx", short, /b/g, "[]");


replaceTest("[$]axbxcx", short, "x", "[$$]");
replaceTest("[$]axbxcx", short, /x/, "[$$]");
replaceTest("[$]a[$]b[$]c[$]", short, /x/g, "[$$]");

replaceTest("xax[$]xcx", short, "b", "[$$]");
replaceTest("xax[$]xcx", short, /b/, "[$$]");
replaceTest("xax[$]xcx", short, /b/g, "[$$]");


replaceTest("[]axbxcx", short, "x", "[$`]");
replaceTest("[]axbxcx", short, /x/, "[$`]");
replaceTest("[]a[xa]b[xaxb]c[xaxbxc]", short, /x/g, "[$`]");

replaceTest("xax[xax]xcx", short, "b", "[$`]");
replaceTest("xax[xax]xcx", short, /b/, "[$`]");
replaceTest("xax[xax]xcx", short, /b/g, "[$`]");


replaceTest("[x]axbxcx", short, "x", "[$&]");
replaceTest("[x]axbxcx", short, /x/, "[$&]");
replaceTest("[x]a[x]b[x]c[x]", short, /x/g, "[$&]");

replaceTest("xax[b]xcx", short, "b", "[$&]");
replaceTest("xax[b]xcx", short, /b/, "[$&]");
replaceTest("xax[b]xcx", short, /b/g, "[$&]");


replaceTest("[axbxcx]axbxcx", short, "x", "[$']");
replaceTest("[axbxcx]axbxcx", short, /x/, "[$']");
replaceTest("[axbxcx]a[bxcx]b[cx]c[]", short, /x/g, "[$']");

replaceTest("xax[xcx]xcx", short, "b", "[$']");
replaceTest("xax[xcx]xcx", short, /b/, "[$']");
replaceTest("xax[xcx]xcx", short, /b/g, "[$']");


replaceTest("[$1]axbxcx", short, "x", "[$1]");
replaceTest("[$1]axbxcx", short, /x/, "[$1]");
replaceTest("[]axbxcx", short, /x()/, "[$1]");
replaceTest("[$1]a[$1]b[$1]c[$1]", short, /x/g, "[$1]");
replaceTest("[]a[]b[]c[]", short, /x()/g, "[$1]");

replaceTest("xax[$1]xcx", short, "b", "[$1]");
replaceTest("xax[$1]xcx", short, /b/, "[$1]");
replaceTest("xax[]xcx", short, /b()/, "[$1]");
replaceTest("xax[$1]xcx", short, /b/g, "[$1]");
replaceTest("xax[]xcx", short, /b()/g, "[$1]");


replaceTest("xax$excx", short, "b", "$e");
replaceTest("xax$excx", short, /b/, "$e");
replaceTest("xax$excx", short, /b/g, "$e");

replaceTest("xaxe$xcx", short, "b", "e$");
replaceTest("xaxe$xcx", short, /b/, "e$");
replaceTest("xaxe$xcx", short, /b/g, "e$");


replaceTest("[$$$1$$a1abb1bb0$002$3$03][$$$1$$b1bcc1cc0$002$3$03]c",
            "abc", /(.)(?=(.))/g, "[$$$$$$1$$$$$11$01$2$21$02$020$002$3$03]");




var ctr = 0;
replaceTest("0axbxcx", short, "x", function r(m, i, s) {
  print(3, arguments.length, "replace('x',func) func-args");
  print("x", m, "replace('x',func(m,..))");
  print(0, i, "replace('x',func(..,i,..))");
  print(short, s, "replace('x',func(..,s))");
  return String(ctr++);
});
print(1, ctr, "replace('x',func) num-match");

ctr = 0;
replaceTest("0axbxcx", short, /x/, function r(m, i, s) {
  print(3, arguments.length, "replace(/x/,func) func-args");
  print("x", m, "replace(/x/,func(m,..))");
  print(0, i, "replace(/x/,func(..,i,..))");
  print(short, s, "replace(/x/,func(..,s))");
  return String(ctr++);
});
print(1, ctr, "replace(/x/,func) num-match");

ctr = 0;
replaceTest("0a1b2c3", short, /x/g, function r(m, i, s) {
  print(3, arguments.length, "replace(/x/g,func) func-args");
  print("x", m, "replace(/x/g,func(m,..))");
  print(ctr * 2, i, "replace(/x/g,func(..,i,.))");
  print(short, s, "replace(/x/g,func(..,s))");
  return String(ctr++);
});
print(4, ctr, "replace(/x/g,func) num-match");

ctr = 0;
replaceTest("0a1b2cx", short, /(x)(?=(.))/g, function r(m, c1, c2, i, s) {
  print(5, arguments.length, "replace(/(x)(?=(.))/g,func) func-args");
  print("x", m, "replace(/(x)(?=(.))/g,func(m,..))");
  print("x", c1, "replace(/(x)(?=(.))/g,func(..,c1,..))");
  print(["a","b","c"][ctr], c2, "replace(/(x)(?=(.))/g,func(..,c2,..))");
  print(ctr * 2, i, "replace(/(x)(?=(.))/g,func(..,i,..))");
  print(short, s, "replace(/(x)(?=(.))/g,func(..,s))");
  return String(ctr++);
});
print(3, ctr, "replace(/x/g,func) num-match");





var long = "";
while (long.length < 0x2000) {
  long += String.fromCharCode(65 + Math.random() * 26);
}

for (var i = 0; i < 3; i++) {
  replaceTest(long.toLowerCase(), long, /(..)/g, function r(m, c1, i, s) {
    var expected = long.substring(0x1ffe, 0x2000);
    print(expected, RegExp.lastMatch);
    print(expected, RegExp.$1);
    print(long.substring(0, 0x1ffe), RegExp.leftContext);
    return m.toLowerCase();
  });
}



var longstring = "xyzzy";
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;
longstring = longstring + longstring;


replaceTest(longstring + longstring,
            "<" + longstring + ">", /<(.*)>/g, "$1$1");

replaceTest("string 42", "string x", /x/g, function() { return 42; });
replaceTest("string 42", "string x", /x/, function() { return 42; });
replaceTest("string 42", "string x", /[xy]/g, function() { return 42; });
replaceTest("string 42", "string x", /[xy]/, function() { return 42; });
replaceTest("string true", "string x", /x/g, function() { return true; });
replaceTest("string null", "string x", /x/g, function() { return null; });
replaceTest("string undefined", "string x", /x/g, function() { return undefined; });

replaceTest("aundefinedbundefinedcundefined",
            "abc", /(.)|(.)/g, function(m, m1, m2, i, s) { return m1+m2; });



var str = 'She sells seashells by the seashore.';
var re = /sh/g;
print('She sells sea$schells by the sea$schore.',
             str.replace(re,"$$" + 'sch'))


var replace_obj = { length: 0, toString: function() { return "x"; }};
print("axc", "abc".replace(/b/, replace_obj));
print("axc", "abc".replace(/b/g, replace_obj));

var search_obj = { length: 1, toString: function() { return "b"; }};
print("axc", "abc".replace(search_obj, function() { return "x"; }));

var side_effect_flag = false;
var replace_obj_side_effects = {
    toString: function() { side_effect_flag = true; return "x" }
}
print("abc", "abc".replace(/z/g, replace_obj_side_effects));
print(side_effect_flag);  

var regexp99pattern = "";
var subject = "";
for (var i = 0; i < 99; i++) {
  regexp99pattern += "(.)";
  subject += String.fromCharCode(i + 24);
}

function testIndices99(re) {
  
  for (var i = 1; i < 100; i++) {
    print(String.fromCharCode(i + 23),
                 subject.replace(re, "$" + i));
  }

  
  for (var i = 1; i < 10; i++) {
    print(String.fromCharCode(i + 23),
                 subject.replace(re, "$0" + i));
  }

  print("$0", subject.replace(re, "$0"));
  print("$00", subject.replace(re, "$00"));
  print(String.fromCharCode(10 + 23) + "0",
               subject.replace(re, "$100"));
}

testIndices99(new RegExp(regexp99pattern));
testIndices99(new RegExp(regexp99pattern, "g"));

var regexp59pattern = "";
for (var i = 0; i < 59; i++) regexp59pattern += "(.)";

function testIndices59(re) {
  
  
  
  var tail = subject.substr(59);
  for (var i = 60; i < 100; i++) {
    print(String.fromCharCode(i / 10 + 23) + (i % 10) + tail,
                 subject.replace(re, "$" + i));
  }
}

testIndices59(new RegExp(regexp59pattern));
testIndices59(new RegExp(regexp59pattern, "g"));



let replace_tostring_count = 0;
const fake_replacer = {
  [Symbol.toPrimitive]: () => { replace_tostring_count++; return "b"; }
};

"a".replace("x", fake_replacer);
print(1, replace_tostring_count);

"a".replace("a", fake_replacer);
print(2, replace_tostring_count);
