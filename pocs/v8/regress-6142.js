try {
  eval('a: { continue a; }');
  print();
} catch(e) {
  print(e instanceof SyntaxError);
  print('Illegal continue statement: \'a\' does not denote an iteration statement', e.message);
}

try {
  eval('continue;');
  print();
} catch(e) {
  print(e instanceof SyntaxError);
  print('Illegal continue statement: no surrounding iteration statement', e.message);
}

try {
  eval('a: { continue b;}');
  print();
} catch(e) {
  print(e instanceof SyntaxError);
  print("Undefined label 'b'", e.message);
}
