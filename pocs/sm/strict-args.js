;

var obj = {};

function strictArgs(a)
{
  "use strict";
  return arguments;
}

var a1, a2, a3;
for (var i = 0; i < 9; i++)
{
  a1 = strictArgs();
  a2 = strictArgs(1);
  a3 = strictArgs(1, obj);
}

print(arraysEqual(a1, []), true);
print(arraysEqual(a2, [1]), true);
print(arraysEqual(a3, [1, obj]), true);
