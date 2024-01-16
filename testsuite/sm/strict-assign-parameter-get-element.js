

function strictAssignParameterGetElement(a)
{
  "use strict";
  a = 17;
  return arguments[0];
}

for (var i = 0; i < 5; i++)
  assertEq(strictAssignParameterGetElement(42), 42);
