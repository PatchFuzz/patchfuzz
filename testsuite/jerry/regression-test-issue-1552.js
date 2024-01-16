













var o = []

function add(i)
{
  delete o[i & 31];
  o[i] = 0;
}

for (var i = 0; i < 130; i++)
{
  add(i)
}
