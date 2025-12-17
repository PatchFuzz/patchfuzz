;
;

var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 42;
var k3 = {};
var v3 = 43;
var k4 = {};
var v4 = 44;

function test_patched() {
  let orig = Map.prototype.set;

  
  var called = false;

  Map.prototype.set = function(k, v) {
    print(k, k1);
    print(v, v1);
    orig.call(this, k2, v2);
    called = true;
  };

  var arr = [[k1, v1]];

  var m = new Map(arr);

  print(called, true);
  print(m.size, 1);
  print(m.has(k1), false);
  print(m.has(k2), true);
  print(m.get(k1), undefined);
  print(m.get(k2), v2);

  Map.prototype.set = orig;
}

function test_proxy1() {
  let orig = Map.prototype.set;

  
  var called = false;

  Map.prototype.set = new Proxy(function(k, v) {
    print(k, k1);
    print(v, v1);
    orig.call(this, k2, v2);
    called = true;
  }, {});

  var arr = [[k1, v1]];

  var m = new Map(arr);

  print(called, true);
  print(m.size, 1);
  print(m.has(k1), false);
  print(m.has(k2), true);
  print(m.get(k1), undefined);
  print(m.get(k2), v2);

  Map.prototype.set = orig;
}

function test_proxy2() {
  let orig = Map.prototype.set;

  
  var called = false;

  Map.prototype.set = new Proxy(function() {
  }, {
    apply: function(target, that, args) {
      var [k, v] = args;
      print(k, k1);
      print(v, v1);
      orig.call(that, k2, v2);
      called = true;
    }
  });

  var arr = [[k1, v1]];

  var m = new Map(arr);

  print(called, true);
  print(m.size, 1);
  print(m.has(k1), false);
  print(m.has(k2), true);
  print(m.get(k1), undefined);
  print(m.get(k2), v2);

  Map.prototype.set = orig;
}

function test_change1() {
  let orig = Map.prototype.set;

  
  var called = false;
  var modified = false;

  var arr = [[k1, v1]];

  var proxy_arr = new Proxy(arr, {
    get: function(target, name) {
      if (name == Symbol.iterator) {
        modified = true;
        Map.prototype.set = function() {
          called = true;
        };
      }
      return target[name];
    }
  });

  var m = new Map(proxy_arr);

  print(modified, true);
  print(called, false);
  print(m.size, 1);
  print(m.has(k1), true);
  print(m.has(k2), false);
  print(m.get(k1), v1);
  print(m.get(k2), undefined);

  Map.prototype.set = orig;
}

function test_change2() {
  let orig = Map.prototype.set;

  
  var called = false;
  var count = 0;

  Map.prototype.set = function(k, v) {
    if (count == 0) {
      print(k, k1);
      print(v, v1);
      orig.call(this, k3, v3);
      Map.prototype.set = function() {
        called = true;
      };
      count = 1;
    } else {
      print(k, k2);
      print(v, v2);
      orig.call(this, k4, v4);
      count = 2;
    }
  };

  var arr = [[k1, v1], [k2, v2]];

  var m = new Map(arr);

  print(called, false);
  print(count, 2);
  print(m.size, 2);
  print(m.has(k1), false);
  print(m.has(k2), false);
  print(m.has(k3), true);
  print(m.has(k4), true);
  print(m.get(k1), undefined);
  print(m.get(k2), undefined);
  print(m.get(k3), v3);
  print(m.get(k4), v4);

  Map.prototype.set = orig;
}

function test_error() {
  let orig = Map.prototype.set;

  var arr = [[k1, v1]];

  
  Map.prototype.set = null;
  print(() => new Map(arr), TypeError);
  Map.prototype.set = {};
  print(() => new Map(arr), TypeError);

  
  Map.prototype.set = function() {
    throw SyntaxError();
  };
  print(() => new Map(arr), SyntaxError);

  Map.prototype.set = orig;
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
