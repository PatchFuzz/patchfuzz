class C {};
let o = {};
o.__defineSetter__("foo", C);

function f(o) {
  try {
    o.foo = 44;
  } catch (e) {
  }
}

f(o);
f(o);
