;


a = b = get = set = eval = arguments = 10;

print({arguments}.arguments, 10);

var o = {a, b: b, get, set: set};
print(o.a, 10);
print(o.b, 10);
print(o.get, 10);
print(o.set, 10);

var names = ['a', 'get', 'set', 'eval'];

names.forEach(ident =>
  print(new Function('return {' + ident + '}.' + ident + ';')(), 10));

names.forEach(ident =>
  print(new Function('var ' + ident + ' = 20; return {' + ident + '}.' + ident + ';')(), 20));

names.forEach(ident =>
  print(new Function('var ' + ident + ' = 30; return (function () {return {' + ident + '}.' + ident + ';})();')(), 30));

var reserved = [
  'break',
  'do',
  'in',
  'typeof',
  'case',
  'else',
  'instanceof',
  'var',
  'catch',
  'export',
  'new',
  'void',
  'class',
  'extends',
  'return',
  'while',
  'const',
  'finally',
  'super',
  'with',
  'continue',
  'for',
  'switch',
  'debugger',
  'function',
  'this',
  'delete',
  'import',
  'try',
  'enum',
  'null',
  'true',
  'false'
];


var nonidents = [
  '"str"',
  '0'
];

reserved.concat(nonidents).forEach(ident =>
  print(() => new Function('return {' + ident + '}'), SyntaxError));

var reservedStrict = [
  'implements',
  'interface',
  'package',
  'private',
  'protected',
  'public',
  'static',
  
  
  
  
];

reservedStrict.forEach(ident =>
  print(new Function('var ' + ident + ' = 10; return {' + ident + '}.' + ident + ';')(), 10));

reservedStrict.concat(['let', 'yield']).forEach(ident =>
  print(() => new Function('"use strict"; return {' + ident + '}'), SyntaxError));

