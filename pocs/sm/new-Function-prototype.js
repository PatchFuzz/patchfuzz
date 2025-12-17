var funProto = Function.prototype;
print(Object.getOwnPropertyDescriptor(funProto, "prototype"), undefined);
print(parseInt.prototype, undefined);
var oldObj;
for (var i = 0, sz = 9; i < sz; oldObj = obj, i++)
{

  try {
    var obj = new funProto;
  }
  catch (e) {}
  print(Object.getOwnPropertyDescriptor(funProto, "prototype"), undefined);
  print(Object.getOwnPropertyDescriptor(parseInt, "prototype"), undefined);
  print(parseInt.prototype, undefined);
}

