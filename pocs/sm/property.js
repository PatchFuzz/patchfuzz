var v = {};
if (typeof v == 'string')
  v.x = 0;
function prop(v)
{
  var z = v.x + 1;
  print(z, NaN);
}
prop(v);

v = [];
v[0] = 0;
v[1] = 1;
v[3] = 3;
v[4] = 4;
function elem(x)
{
  var x = "";
  for (var i = 0; i < 5; i++)
    x += v[i];
  print(x, "01undefined34");
}
elem(v);
