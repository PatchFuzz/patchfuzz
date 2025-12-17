function f() {
  var obj = Object.freeze({});
  %_CreateDataProperty(obj, "foo", "bar");
}


print(f, TypeError);
print(f, TypeError);
