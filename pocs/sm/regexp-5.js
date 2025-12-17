function testMatch() {
  var s = "foobar";
  var re = /abc.+/;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.match(re);
    if (i === 150) {
      re[Symbol.match] = function() {
        count++;
        return null;
      };
    }
  }
  print(count, 49);
}
testMatch();


function testMatchAll() {
  var s = "foobar";
  var re = /abc.+/g;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.matchAll(re);
    if (i === 150) {
      re[Symbol.matchAll] = function() {
        count++;
        return null;
      };
    }
  }
  print(count, 49);
}
testMatchAll();


function testReplace() {
  var s = "foobar";
  var re = /abc.+/;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.replace(re, "");
    if (i === 150) {
      re[Symbol.replace] = function() {
        count++;
        return "";
      };
    }
  }
  print(count, 49);
}
testReplace();


function testReplaceAll() {
  var s = "foobar";
  var re = /abc.+/g;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.replaceAll(re, "");
    if (i === 150) {
      re[Symbol.replace] = function() {
        count++;
        return "";
      };
    }
  }
  print(count, 49);
}
testReplaceAll();


function testSearch() {
  var s = "foobar";
  var re = /abc.+/g;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.search(re);
    if (i === 150) {
      re[Symbol.search] = function() {
        count++;
        return -1;
      };
    }
  }
  print(count, 49);
}
testSearch();


function testSplit() {
  var s = "foobar";
  var re = /abc.+/;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.split(re);
    if (i === 150) {
      re[Symbol.split] = function() {
        count++;
        return [];
      };
    }
  }
  print(count, 49);
}
testSplit();


print(getFuseState().OptimizeRegExpPrototypeFuse.intact, true);
