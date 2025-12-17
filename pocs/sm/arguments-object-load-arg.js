function blackhole() {
  
  eval("");
}

function testConstantArgAccess() {
  blackhole(arguments); 

  for (var i = 0; i < 50; ++i) {
    print(arguments[0], 1);
  }
}
for (var i = 0; i < 20; ++i) testConstantArgAccess(1);

function testDynamicArgAccess() {
  blackhole(arguments); 

  for (var i = 0; i < 50; ++i) {
    print(arguments[i & 1], 1 + (i & 1));
  }
}
for (var i = 0; i < 20; ++i) testDynamicArgAccess(1, 2);

function markElementOveriddenIf(args, cond, value) {
  with ({}) ; 
  if (cond) {
    Object.defineProperty(args, 0, {value});
  }
}

function testBailoutElementReified() {
  blackhole(arguments); 

  for (var i = 0; i < 50; ++i) {
    markElementOveriddenIf(arguments, i === 25, 2);

    var expected = 1 + (i >= 25);
    print(arguments[0], expected);
  }
}
for (var i = 0; i < 20; ++i) testBailoutElementReified(1);

function markLengthOveriddenIf(args, cond, value) {
  with ({}) ; 
  if (cond) {
    args.length = value;
  }
}

function testBailoutLengthReified() {
  blackhole(arguments); 

  for (var i = 0; i < 50; ++i) {
    markLengthOveriddenIf(arguments, i === 25, 0);

    print(arguments[0], 1);
  }
}
for (var i = 0; i < 20; ++i) testBailoutLengthReified(1);

function deleteElementIf(args, cond) {
  with ({}) ; 
  if (cond) {
    delete args[0];
  }
}

function testBailoutElementDeleted() {
  blackhole(arguments); 

  
  var values = [1, undefined];

  for (var i = 0; i < 50; ++i) {
    deleteElementIf(arguments, i === 25);

    var expected = values[0 + (i >= 25)];
    print(arguments[0], expected);
  }
}
for (var i = 0; i < 20; ++i) testBailoutElementDeleted(1);

function testBailoutOutOfBounds() {
  blackhole(arguments); 

  
  var values = [1, undefined];

  for (var i = 0; i < 50; ++i) {
    var index = 0 + (i >= 25);
    var expected = values[index];
    print(arguments[index], expected);
  }
}
for (var i = 0; i < 20; ++i) testBailoutOutOfBounds(1);

function testBailoutArgForwarded(arg1, arg2) {
  blackhole(arguments); 
  blackhole(() => arg2); 

  for (var i = 0; i < 50; ++i) {
    var index = 0 + (i >= 25);
    var expected = 1 + (i >= 25);
    print(arguments[index], expected);
  }
}
for (var i = 0; i < 20; ++i) testBailoutArgForwarded(1, 2);
