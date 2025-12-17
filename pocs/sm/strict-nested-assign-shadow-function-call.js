;

var obj = {};

function strictNestedAssignShadowFunctionCall(p)
{
  "use strict";
  function inner()
  {
    function p() { }
    p = 1776;
  }
  inner();
  return arguments;
}

var a1, a2, a3, a4;
for (var i = 0; i < 5; i++)
{
  a1 = strictNestedAssignShadowFunctionCall();
  a2 = strictNestedAssignShadowFunctionCall(99);
  a3 = strictNestedAssignShadowFunctionCall("");
  a4 = strictNestedAssignShadowFunctionCall(obj);
}

print(arraysEqual(a1, []), true);
print(arraysEqual(a2, [99]), true);
print(arraysEqual(a3, [""]), true);
print(arraysEqual(a4, [obj]), true);
