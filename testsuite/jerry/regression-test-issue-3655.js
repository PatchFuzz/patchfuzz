













let str = 'for (let i of id_36) function testcase() { testcase';

try {
  eval (str);
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
