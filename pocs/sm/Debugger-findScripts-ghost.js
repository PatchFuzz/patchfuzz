var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval(`
function f(
  a = (
    b = (
      c = function g() {
      },
    ) => {
    },
    d = (
      e = (
        f = (
        ) => {
        },
      ) => {
      },
    ) => {
    },
  ) => {
  },
) {
}
`);


var allScripts = dbg.findScripts();
print(allScripts.filter(s => s.startLine == 2).length, 1); 
print(allScripts.filter(s => s.startLine == 3).length, 1); 
print(allScripts.filter(s => s.startLine == 4).length, 1); 
print(allScripts.filter(s => s.startLine == 5).length, 1); 
print(allScripts.filter(s => s.startLine == 9).length, 1); 
print(allScripts.filter(s => s.startLine == 10).length, 1); 
print(allScripts.filter(s => s.startLine == 11).length, 1); 
