;

var obj = {};

var upper;
function strictAssignAfter(a)
{
  "use strict";
  upper = arguments;
  a = 42;
  return upper;
}

var a1, a2, a3;
for (var i = 0; i < 5; i++)
{
  a1 = strictAssignAfter();
  a2 = strictAssignAfter(17);
  a3 = strictAssignAfter(obj);
}

print(arraysEqual(a1, []), true);
print(arraysEqual(a2, [17]), true);
print(arraysEqual(a3, [obj]), true);
