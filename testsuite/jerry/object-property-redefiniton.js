













function checkOwnProperties(obj, propList)
{
  names = Object.getOwnPropertyNames(obj)
  assert(names.length === propList.length)

  for (var i = 0; i < propList.length; ++i)
  {
    assert(names[i] === propList[i])

    var descriptor = Object.getOwnPropertyDescriptor(obj, names[i])
    if (i % 2 == 0) {
      assert(descriptor.writable == true);
      assert(descriptor.enumerable == true);
      assert(descriptor.configurable == true);
      assert(descriptor.get === undefined);
      assert(descriptor.set === undefined);
    } else {
      assert(descriptor.writable == undefined);
      assert(descriptor.enumerable == true);
      assert(descriptor.configurable == true);
      assert(descriptor.get !== undefined || descriptor.set !== undefined);
    }
  }
}

var o = {
  get a() {},
  b:6,
  set c(_) {
  },
  d:10,
  a: 11,
  get b () {},
  c: 12,
  set d (_) {}
}

checkOwnProperties(o, ['a', 'b', 'c', 'd']);
