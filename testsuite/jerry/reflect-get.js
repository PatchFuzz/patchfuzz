

















var object1 = {
  x: "Bat",
  y: "Cat"
};

assert (Reflect.get (object1, 'y') === "Cat");

try {
  Reflect.get ();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

assert (Reflect.get ({}) === undefined);

var o = {x: 10};
function foo () {
  try {
    return Reflect.get (o, "x");
  } catch (e) {
    return 1;
  }
}

assert (10 === foo());

var c = {};
function foo2 (a) {
  try {
    return Reflect.get (c, a);
  } catch (e) {
    return 1;
  }
}

assert (1 === foo2 ({[Symbol.toPrimitive]() { throw new Error(); }}));
