this.__defineGetter__('x', function() { return 0; });
function store_x() {
  x = 23;
}
store_x();
store_x();
print(0, x);
Realm.eval(Realm.current(), "let x = 42");
print(42, x);
store_x();
print(23, x);


this.__defineGetter__('y', function() { return 0; });
function store_y() {
  y = 23;
}
store_y();
store_y();
print(0, y);
Realm.eval(Realm.current(), "const y = 42");
print(42, y);
print(store_y, TypeError);
print(42, y);
