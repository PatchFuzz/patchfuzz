





function testKeyTransitions() {
  var i, key, result, message;
  var array = [];
  for (i = 0; i != 10; i++) {
    key = (i < 3) ? 'pop' : (/\u009e\u0029/g );
    array[key](i);
  }
}
testKeyTransitions();
