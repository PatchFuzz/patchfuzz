



try {
  eval('a: { continue a; }');
  assertUnreachable();
} catch(e) {
  assertTrue(e instanceof SyntaxError);
  assertEquals('Illegal continue statement: \'a\' does not denote an iteration statement', e.message);
}

try {
  eval('continue;');
  assertUnreachable();
} catch(e) {
  assertTrue(e instanceof SyntaxError);
  assertEquals('Illegal continue statement: no surrounding iteration statement', e.message);
}

try {
  eval('a: { continue b;}');
  assertUnreachable();
} catch(e) {
  assertTrue(e instanceof SyntaxError);
  assertEquals("Undefined label 'b'", e.message);
}
