


























assertTrue('abc'[10] === undefined);
String.prototype[10] = 'x';
assertEquals('abc'[10], 'x');




function f() {
  assertEquals('abc'[10], 'x');
}
f();
f();
f();
f();

assertTrue(2[11] === undefined);
Number.prototype[11] = 'y';
assertEquals(2[11], 'y');

assertTrue(true[12] === undefined);
Boolean.prototype[12] = 'z';
assertEquals(true[12], 'z');
