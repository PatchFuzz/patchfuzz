;

var obj = {};

function strictNoargs()
{
  "use strict";
  return arguments;
}

var a1, a2, a3;
for (var i = 0; i < 5; i++)
{
  a1 = strictNoargs();
  a2 = strictNoargs(1);
  a3 = strictNoargs(1, obj);
}

print(arraysEqual(a1, []), true);
print(arraysEqual(a2, [1]), true);
print(arraysEqual(a3, [1, obj]), true);
