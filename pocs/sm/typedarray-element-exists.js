function inBounds() {
  var ta = new Int32Array(10);

  for (var i = 0; i < 100; ++i) {
    var index = i & 7;
    print(index in ta, true);
  }
}
inBounds();

function outOfBounds() {
  var ta = new Int32Array(10);

  for (var i = 0; i < 100; ++i) {
    var index = 10 + (i & 7);
    print(index in ta, false);

    var largeIndex = 2147483647 - (i & 1);
    print(largeIndex in ta, false);
  }
}
outOfBounds();

function negativeIndex() {
  var ta = new Int32Array(10);

  for (var i = 0; i < 100; ++i) {
    var index = -(1 + (i & 7));
    print(index in ta, false);

    var largeIndex = -2147483647 - (i & 1);
    print(largeIndex in ta, false);
  }
}
negativeIndex();

function emptyArray() {
  var ta = new Int32Array(0);

  for (var i = 0; i < 100; ++i) {
    var index = i & 7;
    print(index in ta, false);
    print(-index in ta, false);
  }
}
emptyArray();
