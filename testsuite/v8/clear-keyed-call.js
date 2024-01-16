




























function f(a) {
  a[0](1);
}

f([function(a) { return a; }]);
f([function(a) { return a; }]);
f([function(a) { return a; }]);
%NotifyContextDisposed();
gc();
gc();
gc();
