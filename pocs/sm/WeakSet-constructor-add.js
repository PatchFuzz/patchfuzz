;
;

var k1 = {};
var k2 = {};
var k3 = {};
var k4 = {};

function test_patched() {
  let orig = WeakSet.prototype.add;

  
  var called = false;

  WeakSet.prototype.add = function(k, v) {
    print(k, k1);
    orig.call(this, k2);
    called = true;
  };

  var arr = [k1];

  var m = new WeakSet(arr);

  print(called, true);
  print(m.has(k1), false);
  print(m.has(k2), true);

  WeakSet.prototype.add = orig;
}

function test_proxy1() {
  let orig = WeakSet.prototype.add;

  
  var called = false;

  WeakSet.prototype.add = new Proxy(function(k, v) {
    print(k, k1);
    orig.call(this, k2);
    called = true;
  }, {});

  var arr = [k1];

  var m = new WeakSet(arr);

  print(called, true);
  print(m.has(k1), false);
  print(m.has(k2), true);

  WeakSet.prototype.add = orig;
}

function test_proxy2() {
  let orig = WeakSet.prototype.add;

  
  var called = false;

  WeakSet.prototype.add = new Proxy(function() {
  }, {
    apply: function(target, that, args) {
      var [k, v] = args;
      print(k, k1);
      orig.call(that, k2);
      called = true;
    }
  });

  var arr = [k1];

  var m = new WeakSet(arr);

  print(called, true);
  print(m.has(k1), false);
  print(m.has(k2), true);

  WeakSet.prototype.add = orig;
}

function test_change1() {
  let orig = WeakSet.prototype.add;

  
  var called = false;
  var modified = false;

  var arr = [k1];

  var proxy_arr = new Proxy(arr, {
    get: function(target, name) {
      if (name == Symbol.iterator) {
        modified = true;
        WeakSet.prototype.add = function() {
          called = true;
        };
      }
      return target[name];
    }
  });

  var m = new WeakSet(proxy_arr);

  print(modified, true);
  print(called, false);
  print(m.has(k1), true);
  print(m.has(k2), false);

  WeakSet.prototype.add = orig;
}

function test_change2() {
  let orig = WeakSet.prototype.add;

  
  var called = false;
  var count = 0;

  WeakSet.prototype.add = function(k, v) {
    if (count == 0) {
      print(k, k1);
      orig.call(this, k3);
      WeakSet.prototype.add = function() {
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

  var m = new WeakSet(arr);

  print(called, false);
  print(count, 2);
  print(m.has(k1), false);
  print(m.has(k2), false);
  print(m.has(k3), true);
  print(m.has(k4), true);

  WeakSet.prototype.add = orig;
}

function test_error() {
  let orig = WeakSet.prototype.add;

  var arr = [k1];

  
  WeakSet.prototype.add = null;
  print(() => new WeakSet(arr), TypeError);
  WeakSet.prototype.add = {};
  print(() => new WeakSet(arr), TypeError);

  
  WeakSet.prototype.add = function() {
    throw SyntaxError();
  };
  print(() => new WeakSet(arr), SyntaxError);

  WeakSet.prototype.add = orig;
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
