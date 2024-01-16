



function foo(a, s) { a[s] = 35; }
var x = { bilbo: 3 };
var y = { frodo: 3, bilbo: 'hi' };
foo(x, "bilbo");
foo(x, "bilbo");

foo(y, "bilbo");
