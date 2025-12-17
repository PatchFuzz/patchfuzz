;

var obj = {};

function strictAssignArgumentsElement(a)
{
  "use strict";
  arguments[0] = 42;
  return a;
}

for (var i = 0; i < 5; i++)
{
  print(strictAssignArgumentsElement(), undefined);
  print(strictAssignArgumentsElement(obj), obj);
  print(strictAssignArgumentsElement(17), 17);
}
