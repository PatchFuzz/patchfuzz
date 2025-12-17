let o = {};
let eff = 'f';

function setter(s) {
  +s;
  [arguments];
}

Object.defineProperty(o, eff, { set: setter });

function foo() {
  o[eff] = null;
}

for (let i = 0; i < 100000000; i++) {
  foo();
}
