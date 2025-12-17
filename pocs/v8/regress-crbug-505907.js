try {
  var p = new Proxy({}, {
      getPropertyDescriptor: function() { return [] }
    });
  var o = Object.create(p);
  with (o) { unresolved_name() }
} catch(e) {
}
