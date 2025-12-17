function blackhole() {
  
  eval("");
}

function testLengthAccess() {
  blackhole(arguments); 

  for (var i = 0; i < 50; ++i) {
    print(arguments.length, 1);
  }
}
for (var i = 0; i < 20; ++i) testLengthAccess(1);

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

    var expected = 0 + (i < 25);
    print(arguments.length, expected);
  }
}
for (var i = 0; i < 20; ++i) testBailoutLengthReified(1);


function deleteLengthIf(args, cond) {
  with ({}) ; 
  if (cond) {
    delete args.length;
  }
}

function testBailoutLengthDeleted() {
  blackhole(arguments); 

  
  var values = [1, undefined];

  for (var i = 0; i < 50; ++i) {
    deleteLengthIf(arguments, i === 25);

    var expected = values[0 + (i >= 25)];
    print(arguments.length, expected);
  }
}
for (var i = 0; i < 20; ++i) testBailoutLengthDeleted(1);
