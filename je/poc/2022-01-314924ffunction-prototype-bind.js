













var mul = function(a, b) {
  return a * b;
};

var triple = mul.bind(null, 3);
delete mul;
print(triple(20) === 60);
print(triple.prototype === undefined);

var dupl = triple.bind({}, 2);
print(dupl() === 6);
print(dupl.prototype === undefined);

try {
  var obj = {};
  var new_func = obj.bind(null, 'foo');
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

var obj1 = {num : 36};

var f1 = function(a) {
  return this.num + a;
}

var add36 = f1.bind(obj1);
print(add36(24) === 60);

var appendfoo = f1.bind(obj1, "foo");
print(appendfoo() === "36foo");

var f2 = function(a) {
  return this.num + a.num;
}

var sum = f2.bind(obj1, obj1);
print(sum() === 72);

function P(x, y) {
  this.x = x;
  this.y = y;
}

var P1 = P.bind({}, 2);
var _p1 = new P1();
print(_p1.x === 2);
print(_p1.y === undefined);
print(_p1 instanceof P);
print(_p1 instanceof P1);

var P2 = P1.bind(null);
var _p2 = new P2();
print(_p2.x === 2);
print(_p2.y === undefined);

_p2 = new P2(12, 60);
print(_p2.x === 2);
print(_p2.y === 12);

_p2 = new P2({}, 12);
print(_p2.x === 2);
print(Object.getPrototypeOf(_p2.y) === Object.prototype);
print(_p2 instanceof P);
print(_p2 instanceof P1);
print(_p2 instanceof P2);

var P3 = P2.bind({}, 5);
var _p3 = new P3(8);
print(_p3.x === 2);
print(_p3.y === 5);
print(_p3 instanceof P);
print(_p3 instanceof P1);
print(_p3 instanceof P2);
print(_p3 instanceof P3);

var P4 = P.bind();
P4(4, 5);
print(x === 4);
print(y === 5);

var _x = x;
var _y = y;

var P5 = P.bind(undefined);
P5(5, 4);
print(x === _y);
print(y === _x);

var number = Number.constructor;
var bound = number.bind(null, 24);
var foo = new bound();
print(foo() === undefined);

var number = Number;
var bound = number.bind(null, 3);
var foo = new bound();
print(foo == 3);
print(foo instanceof Number);
print(foo.prototype === undefined);

var func = Number.prototype.toString.bind('foo');
print(func instanceof Function);

try {
  var math = Math.sin;
  var bound = math.bind(null, 0);
  var foo = new bound();
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

var foo = function(x, y) { }

var bound = foo.bind(null);
print(bound.length === 2);

bound = foo.bind(null, 9);
print(bound.length === 1);

bound = foo.bind(null, 9, 8);
print(bound.length === 0);


(function() {
  class C extends Function {}
  var c = new C("x", "y", "return this.foo + x + y;").bind({foo : 1}, 2);
  print(c(3) === 6);
  print(c instanceof C);
})();

function boundPrototypeChecker(f, proto) {
  Object.setPrototypeOf(f, proto);

  var boundFunc = Function.prototype.bind.call(f, null);
  print(Object.getPrototypeOf(boundFunc) === proto);
}


(function() {
  var f = function*(){};
  boundPrototypeChecker(f, Function.prototype)
  boundPrototypeChecker(f, {})
  boundPrototypeChecker(f, null);
})();


(function() {
  var f = () => 5;
  boundPrototypeChecker(f, Function.prototype)
  boundPrototypeChecker(f, {})
  boundPrototypeChecker(f, null);
})();


(function() {
  class C {};
  boundPrototypeChecker(C, Function.prototype)
  boundPrototypeChecker(C, {})
  boundPrototypeChecker(C, null);
})();


(function() {
  function boundPrototypeChecker(superclass) {
    class C extends superclass {
      constructor() {
        return Object.create(null);
      }
    }
    var boundF = Function.prototype.bind.call(C, null);
    print(Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C));
  }

  boundPrototypeChecker(function(){});
  boundPrototypeChecker(Array);
  boundPrototypeChecker(null);
})();
