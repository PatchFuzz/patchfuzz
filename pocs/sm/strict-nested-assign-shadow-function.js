;

var obj = {};

function strictNestedAssignShadowFunction(p)
{
  "use strict";
  function inner()
  {
    function p() { }
    p = 1776;
  }
  return arguments;
}

var a1, a2, a3, a4;
for (var i = 0; i < 5; i++)
{
  a1 = strictNestedAssignShadowFunction();
  a2 = strictNestedAssignShadowFunction(99);
  a3 = strictNestedAssignShadowFunction("");
  a4 = strictNestedAssignShadowFunction(obj);
}

print(arraysEqual(a1, []), true);
print(arraysEqual(a2, [99]), true);
print(arraysEqual(a3, [""]), true);
print(arraysEqual(a4, [obj]), true);
