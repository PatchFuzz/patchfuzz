
var g7 = newGlobal({ newCompartment: true });
g7.parent = this;
g7.eval(`
  Debugger(parent).onEnterFrame = function(frame) {
    let v = frame.environment.getVariable('var0');
  };
`);
class C144252 {
    static #x;
}
