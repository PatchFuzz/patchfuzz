

function *demo_gen () {
    for (var idx = 0; idx < 3; idx++)
    {
      assert (new.target === undefined);
      yield idx;
      assert (new.target === undefined);
    }
}

var gen = demo_gen ();

var value = 0;
for (var item of gen)
{
  value = item;
}

assert (value === 2);
