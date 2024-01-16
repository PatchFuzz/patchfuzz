

function assignElementGetParameter(a)
{
  arguments[0] = 17;
  return a;
}

for (var i = 0; i < 5; i++)
  assertEq(assignElementGetParameter(42), 17);
