function testAddDenseEmpty() {
  var array = [];

  function store(ar, index) {
    ar[index] = index;
  }

  for (var i = 0; i < 10; ++i) {
    store(array, i);
  }

  print(array.length, 10);
  for (var i = 0; i < 10; ++i) {
    print(array[i], i);
  }
}
testAddDenseEmpty();

function testAddDensePacked() {
  var array = [0, 1];

  function store(ar, index) {
    ar[index] = index;
  }

  for (var i = 2; i < 10; ++i) {
    store(array, i);
  }

  print(array.length, 10);
  for (var i = 0; i < 10; ++i) {
    print(array[i], i);
  }
}
testAddDensePacked();

function testAddDenseNonPacked() {
  var array = [, 1];

  function store(ar, index) {
    ar[index] = index;
  }

  for (var i = 2; i < 10; ++i) {
    store(array, i);
  }

  print(array.length, 10);
  print(0 in array, false);
  for (var i = 1; i < 10; ++i) {
    print(array[i], i);
  }
}
testAddDenseNonPacked();

function testAddDenseEmptyPoly() {
  var array = [];

  function store(ar, index) {
    ar[index] = index;
  }

  var objects = [array, {}];

  for (var i = 0; i < 10; ++i) {
    for (var j = 0; j < objects.length; ++j) {
      store(objects[j], i);
    }
  }

  print(array.length, 10);
  for (var i = 0; i < 10; ++i) {
    print(array[i], i);
  }
}
testAddDenseEmptyPoly();

function testAddDensePackedPoly() {
  var array = [0, 1];

  function store(ar, index) {
    ar[index] = index;
  }

  var objects = [array, {}];

  for (var i = 2; i < 10; ++i) {
    for (var j = 0; j < objects.length; ++j) {
      store(objects[j], i);
    }
  }

  print(array.length, 10);
  for (var i = 0; i < 10; ++i) {
    print(array[i], i);
  }
}
testAddDensePackedPoly();

function testAddDenseNonPackedPoly() {
  var array = [, 1];

  function store(ar, index) {
    ar[index] = index;
  }

  var objects = [array, {}];

  for (var i = 2; i < 10; ++i) {
    for (var j = 0; j < objects.length; ++j) {
      store(objects[j], i);
    }
  }

  print(array.length, 10);
  print(0 in array, false);
  for (var i = 1; i < 10; ++i) {
    print(array[i], i);
  }
}
testAddDenseNonPackedPoly();
