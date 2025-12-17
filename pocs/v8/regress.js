function explode() {
  var array = [1,2,3];

  Object.defineProperty(array, 4, {
    get: function () { throw "dynamite"; },
  });

  JSON.stringify(array);
}

try {
  explode();
  print();
} catch(e) {
  print("dynamite", e);
}
