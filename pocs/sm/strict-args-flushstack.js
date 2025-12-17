var args;

function test()
{
  "use strict";
  eval("args = arguments;");
  var a = [];
  for (var i = 0; i < 9; i++)
    a.push(arguments);
  return a;
}

var a = test();

print(Array.isArray(a), true);
print(a.length, 9);

var count = 0;
a.forEach(function(v, i) { count++; print(v, args); });
print(count, 9);

print(Object.prototype.toString.call(args), "[object Arguments]");
print(args.length, 0);
