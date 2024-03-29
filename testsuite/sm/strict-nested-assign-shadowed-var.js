
load(libdir + 'array-compare.js');

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

assertEq(arraysEqual(strictNestedAssignShadowVar(), []), true);
assertEq(arraysEqual(strictNestedAssignShadowVar(99), [99]), true);
assertEq(arraysEqual(strictNestedAssignShadowVar(""), [""]), true);
assertEq(arraysEqual(strictNestedAssignShadowVar(obj), [obj]), true);

