




if ('gczeal' in this)
  gczeal(0);

let u = 0;


let width = 2;

let depth = 4;



let load = 14;



function count(w, d) {
  return (Math.pow(w, d + 1) - 1) / (w - 1);
}



function depthFirstExec(indent, name, w, d) {
  let fun = `${indent}function ${name} (arg) {\n`;
  let inner = "";
  let val = `arg + isInStencilCache(${name})`;
  if (d > 0) {
    for (let i = 0; i < w; i++) {
      inner += depthFirstExec(`${indent}  `, `${name}_${i}`, w, d - 1);
      val = `${name}_${i}(${val})`;
    }
  }
  fun += inner;
  fun += `${indent}  return ${u} + ${val} - ${u};\n`;
  fun += `${indent}}\n`;
  u += 1;
  return fun;
};

const options = {
  fileName: "depthFirstExec.js",
  lineNumber: 1,
  eagerDelazificationStrategy: "ConcurrentDepthFirst",
};
let script = depthFirstExec("", "raceMe", width, depth);

let jobs = [];
for (let i = 0; i < load; i++) {
  
  jobs.push(offThreadCompileToStencil(script, options));
}

const stencil = finishOffThreadStencil(jobs[0]);
evalStencil(stencil, options);

waitForStencilCache(raceMe);
let start = raceMe(0);
let mid = raceMe(0);
let end = raceMe(0);



gc();
let afterGc = raceMe(0);

assertEq(1 <= start, true);
assertEq(start <= mid, true);
assertEq(mid <= end, true);
assertEq(end <= count(width, depth), true);
assertEq(afterGc, 0);
