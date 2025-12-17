let s = `
function f1() { return "Atom_f1"; }
function f2() { return "Atom_f2"; }
function f3() { return "Atom_f3"; }

print(f1(), "Atom_f1");
print(f2(), "Atom_f2");
print(f3(), "Atom_f3");
`;

let c = cacheEntry(s);
let g = newGlobal();
evaluate(c, {saveBytecodeWithDelazifications:true});
evaluate(c, {global:g, loadBytecode:true});
