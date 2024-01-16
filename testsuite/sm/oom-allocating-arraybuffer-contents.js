



var AB = ArrayBuffer;

function f()
{
  return new AB(256);
}


f();

oomTest(f);
