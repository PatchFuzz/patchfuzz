













function must_throw (str, type = SyntaxError)
{
  try
  {
    eval (str);
    assert (false);
  }
  catch (e)
  {
    assert (e instanceof type)
  }
}

must_throw ("function f(a, [a]) {}");
must_throw ("function f([a], a) {}");
must_throw ("function f(a = b, [b]) {}; f()", ReferenceError);
must_throw ("function f([a+b]) {}");
must_throw ("function f([a().b]) {}");
must_throw ("function f(...[a] = [1]) {}");

function a1([a,b]) {
  var a, b;

  assert(a === 1);
  assert(b === undefined);

  var a = 3;
  assert(a === 3);
}
a1([1]);

function a2([a,b]) {
  eval("var a, b");
  assert(a === 1);
  assert(b === undefined);

  eval("var a = 3");
  assert(a === 3);
}
a2([1]);

function f1(a, [b], c, [d], e)
{
  assert (a === 1);
  assert (b === 2);
  assert (c === 3);
  assert (d === 4);
  assert (e === 5);
}
f1(1, [2], 3, [4], 5)

function f2(a, [b], c, [d], e)
{
  eval("");
  assert (a === 1);
  assert (b === 2);
  assert (c === 3);
  assert (d === 4);
  assert (e === 5);
}
f2(1, [2], 3, [4], 5)

var g1 = (a, [b], c, [d], e) => {
  assert (a === 1);
  assert (b === 2);
  assert (c === 3);
  assert (d === 4);
  assert (e === 5);
}
g1(1, [2], 3, [4], 5)

var g2 = (a, [b], c, [d], e) => {
  eval("");
  assert (a === 1);
  assert (b === 2);
  assert (c === 3);
  assert (d === 4);
  assert (e === 5);
}
g2(1, [2], 3, [4], 5)
