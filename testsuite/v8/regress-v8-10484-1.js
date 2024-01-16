



var ar;
Object.defineProperty(Array.prototype, 3,
    { get() { Object.freeze(ar); } });

function foo() {
  ar = [1, 2, 3];
  ar.length = 4;
  ar.pop();
}

assertThrows(foo, TypeError);
assertThrows(foo, TypeError);
assertThrows(foo, TypeError);
assertThrows(foo, TypeError);
