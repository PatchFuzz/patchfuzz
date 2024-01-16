

function assignParameterGetElement(a)
{
  a = 17;
  return arguments[0];
}

for (var i = 0; i < 5; i++)
  assertEq(assignParameterGetElement(42), 17);
