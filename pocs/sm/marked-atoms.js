gczeal(0);
let global = newGlobal({newCompartment: true});
global.eval('var x = {}');
gc();


let atom = Symbol();
print(isAtomMarked(this, atom), true);
print(isAtomMarked(global, atom), false);
global.x[atom] = 0;
print(isAtomMarked(global, atom), true);


let sym = Symbol("baz");
print(isAtomMarked(this, sym), true);
print(isAtomMarked(global, sym), false);
global.x[sym] = 0;
print(isAtomMarked(global, sym), true);
