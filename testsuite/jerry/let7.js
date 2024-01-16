


assert (typeof f === "undefined");

function g() { return 6; }

switch (g()) {
case f():

  let g = 9;

  assert (g === 9);

  function f() { return 6; }
  break;

default:
  assert (false);
}

assert (f() === 6);

switch (g()) {
case f() - 2:

  let g = 9;

  assert ((function() { return g + f(); })() === 17);

  function f() { return 8; }
  break;

default:
  assert (false);
}

assert (f() === 8);

switch (g()) {
case g() + 5:
  {
    let g = 4;
    assert (g == 4);
  }
  break;

default:
  
  function g() { return 1; }
  assert (false);
}

assert (g() === 6);

switch (g()) {
case g() * 2:
  {
    let g = 4;
    assert (g == 4);
    eval();
  }

  function g() { return 3; }
  break;

default:
  assert (false);
}

assert (g() === 3);
