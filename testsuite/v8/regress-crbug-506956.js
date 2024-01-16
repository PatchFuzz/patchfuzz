



try {
  var p = new Proxy({}, {
      getPropertyDescriptor: function() { throw "boom"; }
  });
  var o = Object.create(p);
  with (o) { delete unresolved_name; }
} catch(e) {
}
