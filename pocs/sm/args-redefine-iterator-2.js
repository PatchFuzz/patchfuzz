function t()
{
  var a = arguments;
  Object.defineProperty(a, Symbol.iterator, { writable: false, enumerable: true, configurable: false });
  for (var i = 0; i < 5; i++)
    print(a[Symbol.iterator], Array.prototype[Symbol.iterator]);

  var desc = Object.getOwnPropertyDescriptor(a, Symbol.iterator);
  print(desc.value, Array.prototype[Symbol.iterator]);
  print(desc.writable, false);
  print(desc.enumerable, true);
  print(desc.configurable, false);
}
t();
