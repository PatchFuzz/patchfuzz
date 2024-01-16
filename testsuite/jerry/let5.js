

let arr = [];

for (var a = 0; a < 10; a++)
{
  let j = a;
  var f;

  {
    f = function () { return j; }

    let j = (a & 0x1) ? a + 10 : a + 100;
  }

  arr[j] = f;
}

for (var a = 0; a < 10; a++)
{
  assert (arr[a]() == ((a & 0x1) ? a + 10 : a + 100))
}
