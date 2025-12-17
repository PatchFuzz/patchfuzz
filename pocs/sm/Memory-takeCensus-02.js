;


var dbg = new Debugger;
var census0 = dbg.memory.takeCensus();
Census.walkCensus(census0, "census0", Census.assertAllZeros);

function newGlobalWithDefs() {
  var g = newGlobal({newCompartment: true});
  g.eval(`
         function times(n, fn) {
           var a=[];
           for (var i = 0; i<n; i++)
             a.push(fn());
           return a;
         }`);
  return g;
}



var g = newGlobalWithDefs();
dbg.addDebuggee(g);

g.eval('var objs = times(100, () => ({}));');
g.eval('var rxs  = times(200, () => /foo/);');
g.eval('var ars  = times(400, () => []);');
g.eval('var fns  = times(800, () => () => {});');

var census1 = dbg.memory.takeCensus();
Census.walkCensus(census1, "census1",
                  Census.print(
                    { 'objects':
                      { 'Object':   { count: 100 },
                        'RegExp':   { count: 200 },
                        'Array':    { count: 400 },
                        'Function': { count: 800 }
                      }
                    }));
