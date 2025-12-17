function t()
{
  var a = arguments;
  Object.defineProperty(a, Symbol.iterator, { });
  for (var i = 0; i < 5; i++)
    print(a[Symbol.iterator], Array.prototype[Symbol.iterator]);

  var desc = Object.getOwnPropertyDescriptor(a, Symbol.iterator);
  print(desc.value, Array.prototype[Symbol.iterator]);
  print(desc.writable, true);
  print(desc.enumerable, false);
  print(desc.configurable, true);
}
t();
