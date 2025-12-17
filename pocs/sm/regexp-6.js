newGlobal().evaluate(`(function() {
  var s = "foobar";
  var re = /abc.+/;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.match(re);
    if (i === 150) {
      RegExp.prototype[Symbol.match] = function() {
        count++;
        return null;
      };
    }
  }
  print(count, 49);
})();`);


newGlobal().evaluate(`(function() {
  var s = "foobar";
  var re = /abc.+/g;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.matchAll(re);
    if (i === 150) {
      RegExp.prototype[Symbol.matchAll] = function() {
        count++;
        return null;
      };
    }
  }
  print(count, 49);
})();`);


newGlobal().evaluate(`(function() {
  var s = "foobar";
  var re = /abc.+/;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.replace(re, "");
    if (i === 150) {
      RegExp.prototype[Symbol.replace] = function() {
        count++;
        return "";
      };
    }
  }
  print(count, 49);
})();`);


newGlobal().evaluate(`(function() {
  var s = "foobar";
  var re = /abc.+/g;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.replaceAll(re, "");
    if (i === 150) {
      RegExp.prototype[Symbol.replace] = function() {
        count++;
        return "";
      };
    }
  }
  print(count, 49);
})();`);


newGlobal().evaluate(`(function() {
  var s = "foobar";
  var re = /abc.+/g;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.search(re);
    if (i === 150) {
      RegExp.prototype[Symbol.search] = function() {
        count++;
        return -1;
      };
    }
  }
  print(count, 49);
})();`);


newGlobal().evaluate(`(function() {
  var s = "foobar";
  var re = /abc.+/;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.split(re);
    if (i === 150) {
      RegExp.prototype[Symbol.split] = function() {
        count++;
        return [];
      };
    }
  }
  print(count, 49);
})();`);
