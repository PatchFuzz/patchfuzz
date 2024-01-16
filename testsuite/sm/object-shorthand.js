
load(libdir + 'asserts.js');


a = b = get = set = eval = arguments = 10;

assertEq({arguments}.arguments, 10);

var o = {a, b: b, get, set: set};
assertEq(o.a, 10);
assertEq(o.b, 10);
assertEq(o.get, 10);
assertEq(o.set, 10);

var names = ['a', 'get', 'set', 'eval'];

names.forEach(ident =>
  assertEq(new Function('return {' + ident + '}.' + ident + ';')(), 10));

names.forEach(ident =>
  assertEq(new Function('var ' + ident + ' = 20; return {' + ident + '}.' + ident + ';')(), 20));

names.forEach(ident =>
  assertEq(new Function('var ' + ident + ' = 30; return (function () {return {' + ident + '}.' + ident + ';})();')(), 30));

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
  assertThrowsInstanceOf(() => new Function('return {' + ident + '}'), SyntaxError));

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
  assertEq(new Function('var ' + ident + ' = 10; return {' + ident + '}.' + ident + ';')(), 10));

reservedStrict.concat(['let', 'yield']).forEach(ident =>
  assertThrowsInstanceOf(() => new Function('"use strict"; return {' + ident + '}'), SyntaxError));

