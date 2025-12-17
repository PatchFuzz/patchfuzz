print("./resources/v8-mjsunit.js", "caller relative");

var s = "test test test";

print(0, s.indexOf("t"));
print(3, s.indexOf("t", 1));
print(5, s.indexOf("t", 4));
print(5, s.indexOf("t", 4.1));
print(0, s.indexOf("t", 0));
print(0, s.indexOf("t", -1));
print(0, s.indexOf("t", -1));
print(0, s.indexOf("t", -1.1));
print(0, s.indexOf("t", -1073741825));
print(1, s.indexOf("e"));
print(2, s.indexOf("s"));

print(5, s.indexOf("test", 4));
print(5, s.indexOf("test", 5));
print(10, s.indexOf("test", 6));
print(10, s.indexOf("test", 6.0));
print(0, s.indexOf("test", 0));
print(0, s.indexOf("test", 0.0));
print(0, s.indexOf("test", -1));
print(-1, s.indexOf("not found", -1));
print(0, s.indexOf("test", -1.0));
print(0, s.indexOf("test", -1073741825));
print(0, s.indexOf("test"));
print(-1, s.indexOf("notpresent"));
print(-1, s.indexOf());

for (var i = 0; i < s.length+10; i++) {
  var expected = i < s.length ? i : s.length;
  print(expected, s.indexOf("", i));
}

var reString = "asdf[a-z]+(asdf)?";

print(4, reString.indexOf("[a-z]+"));
print(10, reString.indexOf("(asdf)?"));

print(1, String.prototype.indexOf.length);


var twoByteString = "\u039a\u0391\u03a3\u03a3\u0395";


print(0, twoByteString.indexOf("\u039a"), "Lamda");
print(1, twoByteString.indexOf("\u0391"), "Alpha");
print(2, twoByteString.indexOf("\u03a3"), "First Sigma");
print(3, twoByteString.indexOf("\u03a3",3), "Second Sigma");
print(4, twoByteString.indexOf("\u0395"), "Epsilon");
print(-1, twoByteString.indexOf("\u0392"), "Not beta");


print(0, twoByteString.indexOf("\u039a\u0391"), "lambda Alpha");
print(1, twoByteString.indexOf("\u0391\u03a3"), "Alpha Sigma");
print(2, twoByteString.indexOf("\u03a3\u03a3"), "Sigma Sigma");
print(3, twoByteString.indexOf("\u03a3\u0395"), "Sigma Epsilon");

print(-1, twoByteString.indexOf("\u0391\u03a3\u0395"),
    "Not Alpha Sigma Epsilon");


print(4, twoByteString.indexOf("\u0395"));


var alignmentString = "\u1122\u2211\u2222\uFF00\u00FF\u00FF";
print(2, alignmentString.indexOf("\u2222"));
print(4, alignmentString.indexOf("\u00FF\u00FF"));

var longAlignmentString = "\uFF00" + "\u00FF".repeat(10);
print(1,
    longAlignmentString.indexOf("\u00FF".repeat(10)));


var boundsString = "112233";
print(-1, boundsString.indexOf("334455"));
print(-1, boundsString.indexOf("334455".repeat(10)));




var long = "A";
for(var i = 66; i < 76; i++) {  
  long =  long + String.fromCharCode(i) + long;
}


var pattern = "ABACABADABACABA";
for(var i = 0; i < long.length - pattern.length; i+= 7) {
  var index = long.indexOf(pattern, i);
  print((i + 15) & ~0xf, index, "Long ABACABA...-string at index " + i);
}
print(510, long.indexOf("AJABACA"), "Long AJABACA, First J");
print(1534, long.indexOf("AJABACA", 511), "Long AJABACA, Second J");

pattern = "JABACABADABACABA";
print(511, long.indexOf(pattern), "Long JABACABA..., First J");
print(1535, long.indexOf(pattern, 512), "Long JABACABA..., Second J");



var asciiString = "arglebargleglopglyfarglebargleglopglyfarglebargleglopglyf";
print(-1, asciiString.indexOf("\x2061"));



var allCodePoints = [];
for (var i = 0; i < 65536; i++) allCodePoints[i] = i;
var allCharsString = String.fromCharCode.apply(String, allCodePoints);


print(-1, allCharsString.indexOf("notfound"));


var lengths = [1, 4, 15];  
var indices = [0x5, 0x65, 0x85, 0x105, 0x205, 0x285, 0x2005, 0x2085, 0xfff0];
for (var lengthIndex = 0; lengthIndex < lengths.length; lengthIndex++) {
  var length = lengths[lengthIndex];
  for (var i = 0; i < indices.length; i++) {
    var index = indices[i];
    var pattern = allCharsString.substring(index, index + length);
    print(index, allCharsString.indexOf(pattern));
  }
}

(function nonStringReceivers() {
  let indexOf = String.prototype.indexOf;
  print(() => indexOf.call(null), TypeError);
  print(() => indexOf.call(undefined), TypeError);

  print(-1, indexOf.call(1));
  print(0, indexOf.call(1, "1"));

  print(-1, indexOf.call(1.2));
  print(0, indexOf.call(1.2, "1"));
  print(1, indexOf.call(1.2, "."));
  print(2, indexOf.call(1.2, "2"));
  print(-1, indexOf.call(1.2, "1", 2));

  print(-1, indexOf.call({}));
  print(0, indexOf.call({}, "[object Object]"));
  print(-1, indexOf.call({}, "[object", 1));

  print(-1, indexOf.call([]));
  print(0, indexOf.call([1,2], "1,2"));

  print(-1, indexOf.call(this));
})();

(function nonStringSearchString() {

  print(-1, "".indexOf(1));
  print(2, "_0123".indexOf(1));

  print(-1, "".indexOf(1.2));
  print(1, "01.2".indexOf(1.2));
  print(1, "01.2".indexOf(1.2, 1));
  print(-1, "01.2".indexOf(1.2, 2));

  print(-1, "".indexOf(null));
  print(0, "null".indexOf(null));

  print(-1, "".indexOf(undefined));
  print(1, "_undefined_".indexOf(undefined));

  print(0, "".indexOf([]));
  print(0, "123".indexOf([]));
  print(2, "1,2,3".indexOf([2,3]));

  print(-1, "".indexOf({}));
  print(-1, "".indexOf(this));
})();

(function nonStringPosition() {
  print(0, "aba".indexOf("a", false));
  print(2, "aba".indexOf("a", true));
  print(2, "aba".indexOf("a", "1"));
  print(2, "aba".indexOf("a", "1.00000"));
  print(2, "aba".indexOf("a", "2.00000"));
  print(-1, "aba".indexOf("a", "3.00000"));
})();

(function optimize() {
  function f() {
    return 'abc'.indexOf('a');
  }
  
  print(0, f());
  print(0, f());
  print(0, f());
  
  print(0, f());

  function f2() {
    return 'abc'.indexOf('a', 1);
  }
  
  print(-1, f2());
  print(-1, f2());
  print(-1, f2());
  
  print(-1, f2());

  function f3() {
    return 'abc'.indexOf('a');
  }
  
  print(0, f3());
  print(0, f3());
  print(0, f3());
  
  print(0, f3());

  function f4() {
    return 'abcbc'.indexOf('bc', 2);
  }
  
  print(3, f4());
  print(3, f4());
  print(3, f4());
  
  print(3, f4());

  function f5() {
    return 'abcbc'.indexOf('b', -1);
  }
  
  print(1, f5());
  print(1, f5());
  print(1, f5());
  
  print(1, f5());

  function f6() {
    return 'abcbc'.indexOf('b', -10737418);
  }
  
  print(1, f6());
  print(1, f6());
  print(1, f6());
  
  print(1, f6());
})();

(function optimizeOSR() {
  function f() {
    var result;
    for (var i = 0; i < testLoopCount; i++) {
      result = 'abc'.indexOf('a');
    }
    return result;
  }
  print(0, f());

  function f2() {
    var result;
    for (var i = 0; i < testLoopCount; i++) {
      result = 'abc'.indexOf('a', 1);
    }
    return result;
  }
  print(-1, f2());

  function f3() {
    var result;
    for (var i = 0; i < testLoopCount; i++) {
      result = 'abc'.indexOf('a');
    }
    return result;
  }
  print(0, f3());

  function f4() {
    var result;
    for (var i = 0; i < testLoopCount; i++) {
      result = 'abcbc'.indexOf('bc', 2);
    }
    return result;
  }
  print(3, f4());
})();
