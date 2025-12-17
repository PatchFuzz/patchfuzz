var SetSize = Object.getOwnPropertyDescriptor(Set.prototype, "size").get;


Set.prototype.getSize = SetSize;

var sets = [
  new Set(),
  new Set([1, 2, 3]),
];


function testInlinableAccessorAsMethod() {
  for (var i = 0; i < 100; ++i) {
    var set = sets[i & 1];
    print(set.getSize(), set.size);
  }
}
testInlinableAccessorAsMethod();


function testInlinableAccessorWithFunCall() {
  for (var i = 0; i < 100; ++i) {
    var set = sets[i & 1];
    print(SetSize.call(set), set.size);
  }
}
testInlinableAccessorWithFunCall();


function testInlinableAccessorWithFunApply() {
  for (var i = 0; i < 100; ++i) {
    var set = sets[i & 1];
    print(SetSize.apply(set), set.size);
  }
}
testInlinableAccessorWithFunApply();


function testInlinableAccessorWithBoundFunCall() {
  var callSetSize = Function.prototype.call.bind(SetSize);

  for (var i = 0; i < 100; ++i) {
    var set = sets[i & 1];
    print(callSetSize(set), set.size);
  }
}
testInlinableAccessorWithBoundFunCall();


function testInlinableAccessorWithBoundFunApply() {
  var applySetSize = Function.prototype.apply.bind(SetSize);

  for (var i = 0; i < 100; ++i) {
    var set = sets[i & 1];
    print(applySetSize(set), set.size);
  }
}
testInlinableAccessorWithBoundFunApply();


function testBoundInlinableAccessor() {
  var boundSetSize = SetSize.bind(sets[0]);

  for (var i = 0; i < 100; ++i) {
    print(boundSetSize(), sets[0].size);
  }
}
testBoundInlinableAccessor();


function testBoundInlinableAccessorWithFunCall() {
  var boundSetSize = SetSize.bind(sets[0]);

  for (var i = 0; i < 100; ++i) {
    print(boundSetSize.call(), sets[0].size);
  }
}
testBoundInlinableAccessorWithFunCall();


function testBoundInlinableAccessorWithFunApply() {
  var boundSetSize = SetSize.bind(sets[0]);

  for (var i = 0; i < 100; ++i) {
    print(boundSetSize.apply(), sets[0].size);
  }
}
testInlinableAccessorWithBoundFunApply();
