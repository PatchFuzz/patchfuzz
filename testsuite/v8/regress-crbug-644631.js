





function f() {
  var obj = Object.freeze({});
  %_CreateDataProperty(obj, "foo", "bar");
}


assertThrows(f, TypeError);
