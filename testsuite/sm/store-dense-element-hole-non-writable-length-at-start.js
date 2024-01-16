



function testStoreDenseHole() {
  var array = [, , , , ];
  Object.defineProperty(array, "length", {
      writable: false
  });

  function store(ar, index) {
    ar[index] = index;
  }

  for (var i = 0; i < 10; ++i) {
    store(array, i);
  }

  assertEq(array.length, 4);
  for (var i = 0; i < 4; ++i) {
    assertEq(array[i], i);
  }
  for (var i = 4; i < 10; ++i) {
    assertEq(i in array, false);
  }
}
testStoreDenseHole();

function testStoreDenseHolePoly() {
  var array = [, , , , ];
  Object.defineProperty(array, "length", {
    writable: false
  });

  function store(ar, index) {
    ar[index] = index;
  }

  var objects = [array, {}];

  for (var i = 0; i < 10; ++i) {
    for (var j = 0; j < objects.length; ++j) {
      store(objects[j], i);
    }
  }

  assertEq(array.length, 4);
  for (var i = 0; i < 4; ++i) {
    assertEq(array[i], i);
  }
  for (var i = 4; i < 10; ++i) {
    assertEq(i in array, false);
  }
}
testStoreDenseHolePoly();
