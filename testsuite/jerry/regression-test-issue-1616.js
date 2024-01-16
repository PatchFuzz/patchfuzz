













var name = "";

try
{
  var a = new ArrayBuffer (0xfffffffe)
}
catch (e)
{
  name = e.name;
}

assert(name === "RangeError");

