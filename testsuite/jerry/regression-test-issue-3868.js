













var a = new Proxy({ a : 4, b :4}, {});
var reached = false;

for (var $ in a)
{
  reached = true;
}

assert (reached === true);
