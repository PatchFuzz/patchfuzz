



eval('var x; let y; ()=>y');
assertEquals(undefined, x);

function foo() {
  eval('var z = 1; let w; ()=>w');
  return z;
}
assertEquals(1, foo());



eval('let a; ()=>a; eval("let b; ()=>b; var c; function d() {}")');
assertEquals(undefined, c);
assertEquals("d", d.name);
