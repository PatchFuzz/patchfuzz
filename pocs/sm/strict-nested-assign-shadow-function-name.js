;

var obj = {};

function strictNestedAssignShadowFunctionName(p)
{
  "use strict";
  function inner()
  {
    function p() { p = 1776; }
    p();
  }
  inner();
  return arguments;
}

var a1, a2, a3, a4, a5;
for (var i = 0; i < 5; i++)
{
  a1 = strictNestedAssignShadowFunctionName();
  a2 = strictNestedAssignShadowFunctionName(99);
  a3 = strictNestedAssignShadowFunctionName("");
  a4 = strictNestedAssignShadowFunctionName(obj);
}

print(arraysEqual(a1, []), true);
print(arraysEqual(a2, [99]), true);
print(arraysEqual(a3, [""]), true);
print(arraysEqual(a4, [obj]), true);
