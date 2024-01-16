













var name = "";

try
{
  Object.defineProperties(constructor.isExtensible, {a: Object.getOwnPropertyDescriptor(Uint8ClampedArray, "length")})
  new Int32Array(new ArrayBuffer(), undefined, 40000000000)
}
catch (e)
{
  name = e.name;
}


assert(name === "RangeError");
