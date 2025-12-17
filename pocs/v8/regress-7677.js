"use strict";


function arraylike(freeze) {
  let x;
  const obj = {length: 42};
  Object.defineProperty(obj, 5, {get() {return x}, set(y) {x = y}});
  return freeze ? Object.freeze(obj) : Object.seal(obj);
}


{
  const sealed = arraylike(false);
  Array.prototype.fill.call(sealed, "foo", 5, 6);
  print("foo", sealed[5]);
  print(() => Array.prototype.fill.call(sealed, "foo"), TypeError);
}{
  const frozen = arraylike(true);
  Array.prototype.fill.call(frozen, "foo", 5, 6);
  print("foo", frozen[5]);
  print(() => Array.prototype.fill.call(frozen, "foo"), TypeError);
}


{
  const sealed = Object.seal({length: 0});
  print(undefined, Array.prototype.shift.call(sealed));
}{
  const sealed = Object.seal({length: 42});
  print(undefined, Array.prototype.shift.call(sealed));
}{
  let x;
  let obj = {length: 42, [1]: "foo"};
  Object.defineProperty(obj, 0, {get() {return x}, set(y) {x = y}});
  const sealed = Object.seal(obj);
  print(() => Array.prototype.shift.call(sealed), TypeError);
  print("foo", sealed[0]);
}{
  const frozen = Object.freeze({length: 0});
  print(() => Array.prototype.shift.call(frozen), TypeError);
}


{
  const sealed = arraylike(false);
  print([undefined], Array.prototype.splice.call(sealed, 5, 1, "foo"));
  print("foo", sealed[5]);
  print(() => Array.prototype.splice.call(sealed, 5, 0, "bar"),
      TypeError);
  print("foo", sealed[5]);
}{
  const frozen = arraylike(true);
  print(() => Array.prototype.splice.call(frozen, 5, 1, "foo"),
      TypeError);
  print("foo", frozen[5]);
  print(() => Array.prototype.splice.call(frozen, 5, 0, "bar"),
      TypeError);
  print("foo", frozen[5]);
}
