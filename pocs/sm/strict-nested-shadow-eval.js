;

function strictNestedShadowEval(code, p)
{
  "use strict";
  function inner(p) { eval(code); }
  return arguments;
}

var a1, a2, a3, a4, a5, a6;
for (var i = 0; i < 5; i++)
{
  a1 = strictNestedShadowEval("1", 2);
  a2 = strictNestedShadowEval("arguments");
  a3 = strictNestedShadowEval("p = 2");
  a4 = strictNestedShadowEval("p = 2", 17);
  a5 = strictNestedShadowEval("arguments[0] = 17");
  a6 = strictNestedShadowEval("arguments[0] = 17", 42);
}

print(arraysEqual(a1, ["1", 2]), true);
print(arraysEqual(a2, ["arguments"]), true);
print(arraysEqual(a3, ["p = 2"]), true);
print(arraysEqual(a4, ["p = 2", 17]), true);
print(arraysEqual(a5, ["arguments[0] = 17"]), true);
print(arraysEqual(a6, ["arguments[0] = 17", 42]), true);
