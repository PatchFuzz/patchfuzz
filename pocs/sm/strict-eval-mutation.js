;

var obj = {};

function strictEvalMutation(code)
{
  "use strict";
  return eval(code);
}

var a1, a2;
for (var i = 0; i < 5; i++)
{
  a1 = strictEvalMutation("code = 17; arguments");
  a2 = strictEvalMutation("arguments[0] = 17; arguments");
  print(strictEvalMutation("arguments[0] = 17; code"), "arguments[0] = 17; code");
}

print(arraysEqual(a1, ["code = 17; arguments"]), true);
print(arraysEqual(a2, [17]), true);
