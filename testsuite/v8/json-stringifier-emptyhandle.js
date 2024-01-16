



























function explode() {
  var array = [1,2,3];

  Object.defineProperty(array, 4, {
    get: function () { throw "dynamite"; },
  });

  JSON.stringify(array);
}

try {
  explode();
  assertUnreachable();
} catch(e) {
  assertEquals("dynamite", e);
}
