;

var obj = {};



function strictNestedAssignShadowVar(p)
{
  "use strict";
  function inner()
  {
    var p = 12;
    function innermost() { p = 1776; return 12; }
    return innermost();
  }
  return arguments;
}

print(arraysEqual(strictNestedAssignShadowVar(), []), true);
print(arraysEqual(strictNestedAssignShadowVar(99), [99]), true);
print(arraysEqual(strictNestedAssignShadowVar(""), [""]), true);
print(arraysEqual(strictNestedAssignShadowVar(obj), [obj]), true);

