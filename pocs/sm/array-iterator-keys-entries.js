;

var data = [1, 2, 3, "abc"];

var ki = data.keys();
for (var i = 0; i < data.length; i++)
  print(ki.next(), i, false);
print(ki, undefined);

var ei = data.entries();
for (var i = 0; i < data.length; i++)
  print(ei.next(), [i, data[i]], false);
print(ei, undefined);
