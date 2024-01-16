with ({}); 

function args() { return arguments; }

for (let xs of [
  
  [[], [1, 2, 3]],

  
  ["", "asdf"],

  
  [new Int32Array(0), new Int32Array(10)],

  
  [args(), args(1, 2, 3)],
]) {
  for (let cst of [0, -1]) {
    
    let min = Function("x", `return Math.min(x.length, ${cst})`);
    for (let i = 0; i < 100; ++i) {
      let x = xs[i & 1];
      assertEq(min(x), cst);
    }

    
    min = Function("x", `return Math.min(${cst}, x.length)`);
    for (let i = 0; i < 100; ++i) {
      let x = xs[i & 1];
      assertEq(min(x), cst);
    }

    
    let max = Function("x", `return Math.max(x.length, ${cst})`);
    for (let i = 0; i < 100; ++i) {
      let x = xs[i & 1];
      assertEq(max(x), x.length);
    }

    
    max = Function("x", `return Math.max(${cst}, x.length)`);
    for (let i = 0; i < 100; ++i) {
      let x = xs[i & 1];
      assertEq(max(x), x.length);
    }
  }
}
