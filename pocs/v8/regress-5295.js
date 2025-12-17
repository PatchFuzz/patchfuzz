eval('var x; let y; ()=>y');
print(undefined, x);

function foo() {
  eval('var z = 1; let w; ()=>w');
  return z;
}
print(1, foo());



eval('let a; ()=>a; eval("let b; ()=>b; var c; function d() {}")');
print(undefined, c);
print("d", d.name);
