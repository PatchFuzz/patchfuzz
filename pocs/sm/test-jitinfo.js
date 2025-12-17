function f() {
  var res = 0;
  var d = new FakeDOMObject();
  print(d !== new FakeDOMObject(), true);

  for (var i = 0; i < 100; i++) {
    print(d.slot, 42);

    var x = d.x;
    print(typeof x, "number");

    d.x = 10;
    d.x = undefined;

    d.x = FakeDOMObject.prototype.x;
    FakeDOMObject.prototype.x = d.x;
    FakeDOMObject.prototype.doFoo();

    print(d.doFoo(), 0);
    print(d.doFoo(1), 1);
    print(d.doFoo(1, 2), 2);
  }
}
f();
