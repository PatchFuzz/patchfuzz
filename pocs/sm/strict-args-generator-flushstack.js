var args;

function* upToTen()
{
  "use strict";
  eval("args = arguments;");
  for (var i = 0; i < 9; i++)
    yield i;
}

var gen = upToTen();

var i = 0;
for (var v of gen)
{
  print(v, i);
  i++;
}

print(i, 9);

print(Object.prototype.toString.call(args), "[object Arguments]");
print(args.length, 0);
