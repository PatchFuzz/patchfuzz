function t()
{
  var a = arguments;
  Object.defineProperty(a, "length", { writable: false });
  for (var i = 0; i < 5; i++)
    print(a.length, 0);

  var desc = Object.getOwnPropertyDescriptor(a, "length");
  print(desc.value, 0);
  print(desc.writable, false);
  print(desc.enumerable, false);
  print(desc.configurable, true);
}
t();
