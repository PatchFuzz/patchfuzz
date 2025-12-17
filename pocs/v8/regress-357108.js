function TestArray(constructor) {
  function Check(a) {
    a[0] = "";
    print(0, a[0]);
    a[0] = {};
    print(0, a[0]);
    a[0] = { valueOf : function() { return 27; } };
    print(27, a[0]);
  }
  Check(new constructor(1));
  Check(new constructor(100));
}

TestArray(Uint8Array);
