

function f()
{
  return { *__proto__() {}, __proto__: null };
}

for (var i = 0; i < 2e3; i++)
  f();
