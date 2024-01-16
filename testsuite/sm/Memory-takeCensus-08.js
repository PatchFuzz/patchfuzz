

let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

g.eval(`
       var stuff = [];
       function add(n, c) {
         for (let i = 0; i < n; i++)
           stuff.push(c());
       }

       let count = 0;

       function obj() { return { count: count++ }; }
       obj.factor = 1;

       
       
       function fun() { let v = count; return () => { return v; } }
       fun.factor = 2;

       function str() { return 'perambulator' + count++; }
       str.factor = 1;

       
       
       
       
       
       
       function ev()  {
         return eval(\`(function () { return \${ count++ } })\`);
       }
       ev.factor = 5;

       
       function shape() { return { [ 'theobroma' + count++ ]: count }; }
       shape.factor = 3;
       `);

let baseline = 0;
function countIncreasedByAtLeast(n) {
  let oldBaseline = baseline;

  
  
  
  
  
  
  gc(g, 'shrinking');

  baseline = dbg.memory.takeCensus({ breakdown: { by: 'count' } }).count;
  return baseline >= oldBaseline + n;
}

countIncreasedByAtLeast(0);

g.add(100, g.obj);
assertEq(countIncreasedByAtLeast(g.obj.factor * 100), true);

g.add(100, g.fun);
assertEq(countIncreasedByAtLeast(g.fun.factor * 100), true);

g.add(100, g.str);
assertEq(countIncreasedByAtLeast(g.str.factor * 100), true);

g.add(100, g.ev);
assertEq(countIncreasedByAtLeast(g.ev.factor * 100), true);

g.add(100, g.shape);
assertEq(countIncreasedByAtLeast(g.shape.factor * 100), true);
