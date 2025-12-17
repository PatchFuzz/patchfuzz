function t()
{
  var a = arguments;
  Object.defineProperty(a, "length", { enumerable: true });
  for (var i = 0; i < 5; i++)
    print(a.length, 0);

  var desc = Object.getOwnPropertyDescriptor(a, "length");
  print(desc.value, 0);
  print(desc.writable, true);
  print(desc.enumerable, true);
  print(desc.configurable, true);
}
t();
