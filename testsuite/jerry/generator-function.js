















(function () {
  function* generatorFn(){}
  var ownProto = Object.getPrototypeOf(generatorFn());
  var sharedProto = Object.getPrototypeOf(ownProto);

  assert(ownProto === generatorFn.prototype);
  assert(sharedProto !== Object.prototype);
  assert(sharedProto === Object.getPrototypeOf(function*(){}.prototype));
  assert(sharedProto.hasOwnProperty('next'));
})();


(function () {
  function* generatorFn(){}
  var g = generatorFn();
  var ownProto = Object.getPrototypeOf(g);
  var sharedProto = Object.getPrototypeOf(ownProto);
  var iterProto = Object.getPrototypeOf(sharedProto);

  assert(ownProto === generatorFn.prototype);
  assert(iterProto.hasOwnProperty(Symbol.iterator));
  assert(!sharedProto.hasOwnProperty(Symbol.iterator));
  assert(!ownProto.hasOwnProperty(Symbol.iterator));
  assert(g[Symbol.iterator]() === g);
})();


(function () {
  function* g(){}
  var iterator = new g.constructor("a","b","c","() => yield\n yield a; yield b; yield c;")(1,2,3);

  var item = iterator.next();
  assert(item.value === 1);
  assert(item.done === false);

  item = iterator.next();
  assert(item.value === 2);
  assert(item.done === false);

  item = iterator.next();
  assert(item.value === 3);
  assert(item.done === false);

  item = iterator.next();
  assert(item.value === undefined);
  assert(item.done === true);

  assert(g.constructor === (function*(){}).constructor);
})();


(function () {
  function *f() {};

  try {
    Object.getPrototypeOf(f).constructor("yield", "");
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
})();


(function () {
  function *f() {};

  Object.getPrototypeOf(f).xx = 5;
  assert(Object.getPrototypeOf(f).prototype.constructor.xx === 5);
})();


(function () {
  function *f() {};

  var originalProto = f.prototype;
  f.prototype = 5;
  assert(Object.getPrototypeOf(f()) === Object.getPrototypeOf(originalProto));
  var fakeProto = { x : 6 };
  f.prototype = fakeProto;
  assert(Object.getPrototypeOf(f()) === fakeProto);
  assert(f.next === undefined);
})();
