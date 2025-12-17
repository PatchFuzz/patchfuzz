;

function strictMaybeNestedEval(code, p)
{
  "use strict";
  function inner() { eval(code); }
  return arguments;
}

var a1, a2, a3, a4;
for (var i = 0; i < 5; i++)
{
  a1 = strictMaybeNestedEval("1", 2);
  a2 = strictMaybeNestedEval("arguments");
  a3 = strictMaybeNestedEval("p = 2");
  a4 = strictMaybeNestedEval("p = 2", 17);
}

print(arraysEqual(a1, ["1", 2]), true);
print(arraysEqual(a2, ["arguments"]), true);
print(arraysEqual(a3, ["p = 2"]), true);
print(arraysEqual(a4, ["p = 2", 17]), true);
