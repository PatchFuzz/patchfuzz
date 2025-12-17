const size = 100;
function foo() {
  let a = new Array(size);
  let b = new Array(size);
  let c = new Array(size);
  let d = new Array(size);
  let e = new Array(size);
  a.fill(1);
  b.fill(1);
  c.fill(1);
  d.fill(1);
  e.fill(1);

  validSlotMemop = function() {
    let cl = c.length;
    total = 0;
    let _c = c, _d = d;
    
    for(let i = 0; i < cl; ++i) {
      _c[i] = _d[i];
    }
  };

  return function slotMemop() {
    let al = a.length;
    total = 0;
    
    for(let i = 0; i < al; ++i) {
      a[i] = b[i];
      e[i] = 0;
    }
    validSlotMemop();
  };
}
const f = foo();
f();
f();
print("PASSED");
