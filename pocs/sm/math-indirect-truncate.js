function testCeil() {
  function ceil(a, b) {
    return Math.ceil(a / b) | 0;
  }

  
  for (var i = 0; i < 50; i++) {
    ceil(5, 5);
  }

  print(ceil(5, 3), 2);
}
testCeil();

function testFloor() {
  function floor(a, b) {
    return Math.floor(a / b) | 0;
  }

  
  for (var i = 0; i < 50; i++) {
    floor(5, 5);
  }

  print(floor(-5, 3), -2);
}
testFloor();

function testRound() {
  function round(a, b) {
    return Math.round(a / b) | 0;
  }

  
  for (var i = 0; i < 50; i++) {
    round(5, 5);
  }

  print(round(5, 3), 2);
}
testRound();

function testTrunc() {
  function trunc(a, b) {
    return Math.trunc(a / b) | 0;
  }

  
  for (var i = 0; i < 50; i++) {
    trunc(5, 5);
  }

  print(trunc(5, 3), 1);
}
testTrunc();
