function checkOwnProperties(v, count) {
  var properties = Object.getOwnPropertyNames(v);
  print(properties.length, count);
}


function testStoreNoFeedback() {
  arr = new Int32Array(10);
  function f(a) { a["-1"] = 15; }

  for (var i = 0; i < 3; i++) {
    arr.__defineGetter__("x", function() { });
    checkOwnProperties(arr, 11);
    f(arr);
  }
}
testStoreNoFeedback();

function testStoreGeneric() {
  arr = new Int32Array(10);
  var index = "-1";
  function f1(a) { a[index] = 15; }
  %EnsureFeedbackVectorForFunction(f1);

  
  f1({a: 1});
  f1({b: 1});
  f1({c: 1});
  f1({d: 1});

  for (var i = 0; i < 3; i++) {
    arr.__defineGetter__("x", function() { });
    checkOwnProperties(arr, 11);
    f1(arr);
  }
}
testStoreGeneric();
