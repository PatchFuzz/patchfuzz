;

var obj = {};

function args(a) { return arguments; }

var a1, a2, a3, a4;

for (var i = 0; i < 5; i++)
{
  a1 = args();
  a2 = args(1);
  a3 = args(1, obj);
  a4 = args("foopy");
}

print(arraysEqual(a1, []), true);
print(arraysEqual(a2, [1]), true);
print(arraysEqual(a3, [1, obj]), true);
print(arraysEqual(a4, ["foopy"]), true);
