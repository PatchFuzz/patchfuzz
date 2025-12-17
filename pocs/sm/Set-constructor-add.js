;
;

var k1 = {};
var k2 = {};
var k3 = {};
var k4 = {};

function test_patched() {
  let orig = Set.prototype.add;

  
  var called = false;

  Set.prototype.add = function(k, v) {
    print(k, k1);
    orig.call(this, k2);
    called = true;
  };

  var arr = [k1];

  var m = new Set(arr);

  print(called, true);
  print(m.size, 1);
  print(m.has(k1), false);
  print(m.has(k2), true);

  Set.prototype.add = orig;
}

function test_proxy1() {
  let orig = Set.prototype.add;

  
  var called = false;

  Set.prototype.add = new Proxy(function(k, v) {
    print(k, k1);
    orig.call(this, k2);
    called = true;
  }, {});

  var arr = [k1];

  var m = new Set(arr);

  print(called, true);
  print(m.size, 1);
  print(m.has(k1), false);
  print(m.has(k2), true);

  Set.prototype.add = orig;
}

function test_proxy2() {
  let orig = Set.prototype.add;

  
  var called = false;

  Set.prototype.add = new Proxy(function() {
  }, {
    apply: function(target, that, args) {
      var [k, v] = args;
      print(k, k1);
      orig.call(that, k2);
      called = true;
    }
  });

  var arr = [k1];

  var m = new Set(arr);

  print(called, true);
  print(m.size, 1);
  print(m.has(k1), false);
  print(m.has(k2), true);

  Set.prototype.add = orig;
}

function test_change1() {
  let orig = Set.prototype.add;

  
  var called = false;
  var modified = false;

  var arr = [k1];

  var proxy_arr = new Proxy(arr, {
    get: function(target, name) {
      if (name == Symbol.iterator) {
        modified = true;
        Set.prototype.add = function() {
          called = true;
        };
      }
      return target[name];
    }
  });

  var m = new Set(proxy_arr);

  print(modified, true);
  print(called, false);
  print(m.size, 1);
  print(m.has(k1), true);
  print(m.has(k2), false);

  Set.prototype.add = orig;
}

function test_change2() {
  let orig = Set.prototype.add;

  
  var called = false;
  var count = 0;

  Set.prototype.add = function(k, v) {
    if (count == 0) {
      print(k, k1);
      orig.call(this, k3);
      Set.prototype.add = function() {
        called = true;
      };
      count = 1;
    } else {
      print(k, k2);
      orig.call(this, k4);
      count = 2;
    }
  };

  var arr = [k1, k2];

  var m = new Set(arr);

  print(called, false);
  print(count, 2);
  print(m.size, 2);
  print(m.has(k1), false);
  print(m.has(k2), false);
  print(m.has(k3), true);
  print(m.has(k4), true);

  Set.prototype.add = orig;
}

function test_error() {
  let orig = Set.prototype.add;

  var arr = [k1];

  
  Set.prototype.add = null;
  print(() => new Set(arr), TypeError);
  Set.prototype.add = {};
  print(() => new Set(arr), TypeError);

  
  Set.prototype.add = function() {
    throw SyntaxError();
  };
  print(() => new Set(arr), SyntaxError);

  Set.prototype.add = orig;
}

function test() {
 test_patched();
 test_proxy1();
 test_proxy2();
 test_change1();
 test_change2();
 test_error();
}

test();
