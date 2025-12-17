function print(o, s) {
  print(String(o), s);
}
function test() {
  print({x: 1}, "[object Object]");
  print({[Symbol.toStringTag]: "Foo"}, "[object Foo]");
  print({toString() { return 123; }}, "123");
  print({toString: Math.abs}, "NaN");
  print({x: "hello", toString() { return this.x; }}, "hello");

  let c = 0;
  let fun = () => "hi-" + ++c;
  print({toString: fun}, "hi-1");
  print({toString: "foo", valueOf: fun}, "hi-2");
  print({toString() { return {}; }, valueOf: fun}, "hi-3");

  let proto = {};
  proto[Symbol.toStringTag] = null;
  print(Object.create(proto), "[object Object]");
  proto[Symbol.toStringTag] = "Bar";
  print(Object.create(proto), "[object Bar]");
}
test();
