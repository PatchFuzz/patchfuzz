function testNoBoundThis() {
  var ArrayJoin = Function.prototype.apply.bind(Array.prototype.join);

  var xs = [
    [],
    ["a"],
    ["a", "b"],
    ["a", "b", "c"],
  ];

  for (var i = 0; i < 100; ++i) {
    var x = xs[i & 3];
    print(ArrayJoin(x), x.join());
    print(ArrayJoin(x, null), x.join());
    print(ArrayJoin(x, undefined), x.join());

    
    print(ArrayJoin(x, []), x.join());
    print(ArrayJoin(x, [""]), x.join(""));
  }
}
testNoBoundThis();

function testBoundThis() {
  var array = ["a", "b"];
  var ArrayJoin = Function.prototype.apply.bind(Array.prototype.join, array);

  for (var i = 0; i < 100; ++i) {
    print(ArrayJoin(), "a,b");
    print(ArrayJoin(null), "a,b");
    print(ArrayJoin(undefined), "a,b");

    
    print(ArrayJoin([]), "a,b");
    print(ArrayJoin([""]), "ab");
  }
}
testBoundThis();

function testBoundThisAndArgs() {
  var array = ["a", "b"];
  var ArrayJoinNull = Function.prototype.apply.bind(Array.prototype.join, array, null);
  var ArrayJoinUndefined = Function.prototype.apply.bind(Array.prototype.join, array, undefined);
  var ArrayJoinEmptyArgs = Function.prototype.apply.bind(Array.prototype.join, array, []);
  var ArrayJoinWithArgs = Function.prototype.apply.bind(Array.prototype.join, array, [""]);

  for (var i = 0; i < 100; ++i) {
    print(ArrayJoinNull(), "a,b");
    print(ArrayJoinUndefined(), "a,b");

    
    print(ArrayJoinEmptyArgs(), "a,b");
    print(ArrayJoinWithArgs(), "ab");
  }
}
testBoundThisAndArgs();

function testUndefinedGuard() {
  var array = ["a", "b"];

  var ArrayJoin = Function.prototype.apply.bind(Array.prototype.join);
  var ArrayJoinBoundThis = Function.prototype.apply.bind(Array.prototype.join, array);

  var args = [
    null,
    [""],
  ];
  var expected = [
    "a,b",
    "ab",
  ];

  for (var i = 0; i < 100; i++) {
    var index = (i > 50)|0;

    print(ArrayJoin(array, args[index]), expected[index]);
    print(ArrayJoinBoundThis(args[index]), expected[index]);
  }
}
testUndefinedGuard();

function testUndefinedBoundArgsGuard() {
  var array = ["a", "b"];

  var ArrayJoinBoundNull = Function.prototype.apply.bind(Array.prototype.join, array, null);
  var ArrayJoinBoundUndefined = Function.prototype.apply.bind(Array.prototype.join, array, undefined);
  var ArrayJoinBoundArgs = Function.prototype.apply.bind(Array.prototype.join, array, [""]);

  var fns = [
    [
      ArrayJoinBoundNull,
      ArrayJoinBoundArgs,
    ],
    [
      ArrayJoinBoundUndefined,
      ArrayJoinBoundArgs,
    ],
  ];
  var expected = [
    "a,b",
    "ab",
  ];

  for (var i = 0; i < 100; i++) {
    var index = (i > 50)|0;

    print(fns[0][index](), expected[index]);
    print(fns[1][index](), expected[index]);
  }
}
testUndefinedBoundArgsGuard();
