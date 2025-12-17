var c = { x: 2, y: 1 };

function h() {
  %TryMigrateInstance(c);
  return 2;
}
%NeverOptimizeFunction(h);

function f() {
  for (var i = 0; i < 100000; i++) {
    var n = c.x + h();
    print(4, n);
  }
  var o2 = [{ x: 2.5, y:1 }];
  return o2;
}

f();
