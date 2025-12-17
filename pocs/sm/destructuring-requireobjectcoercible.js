;
;

function f(v)
{
  if (v + "")
    ({} = v);
}

f(true);
f({});
print(() => f(null), TypeError);
print(() => f(undefined), TypeError);

function g(v)
{
  if (v + "")
    ({} = v);
}

g(true);
g({});
print(() => g(undefined), TypeError);
print(() => g(null), TypeError);

function h(v)
{
  if (v + "")
    ([] = v);
}

h([true]);
h("foo");
print(() => h(undefined), TypeError);
print(() => h(null), TypeError);

Object.defineProperty(Boolean.prototype, "v",
                      { get() { "use strict"; return typeof this; },
                        enumerable: true,
                        configurable: true });

Object.defineProperty(Number.prototype, "v",
                      { get() { "use strict"; return typeof this; },
                        enumerable: true,
                        configurable: true });

Object.defineProperty(String.prototype, "v",
                      { get() { "use strict"; return typeof this; },
                        enumerable: true,
                        configurable: true });

Object.defineProperty(Symbol.prototype, "v",
                      { get() { "use strict"; return typeof this; },
                        enumerable: true,
                        configurable: true });

function primitiveThisSupported()
{
  return 3.14.custom === "number";
}

function primitiveThisTests()
{
  function f(v)
  {
    var type = typeof v;

    ({ v } = v);

    print(v, type);
  }

  f(true);
  f(3.14);
  f(72);
  f("ohai");
  f(Symbol.iterator);

  print(() => f(undefined), TypeError);
  print(() => f(null), TypeError);

  function g(v)
  {
    var type = typeof v;

    ({ v } = v);

    print(v, type);
  }

  g(true);
  g(3.14);
  g(72);
  g("ohai");
  g(Symbol.iterator);

  print(() => g(null), TypeError);
  print(() => g(undefined), TypeError);
}
if (primitiveThisSupported())
  primitiveThisTests();





evalcx("({} = 1);", evalcx("lazy"));
