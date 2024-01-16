




























var functionToCatch;
var lineNumber;

function catchLineNumber () {
  var x = {};

  Error.prepareStackTrace = function (error, stackTrace) {
    stackTrace.some(function (frame) {
      if (frame.getFunction() == functionToCatch) {
        lineNumber = frame.getLineNumber();
        return true;
      }
      return false;
    });
    return lineNumber;
  };

  Error.captureStackTrace(x);
  return x.stack;
}

function log() {
  catchLineNumber();
}

function foo() {}

function test1() {
  log(foo() == foo()
      ? 'a'
      : 'b');
}

function test2() {
  var o = { foo: function () {}}
  log(o.foo() == o.foo()
      ? 'a'
      : 'b');
}

function test3() {
  var o = { log: log, foo: function() { } };
  o.log(o.foo() == o.foo()
      ? 'a'
      : 'b');

}

function test(f, expectedLineNumber) {
  functionToCatch = f;
  f();

  assertEquals(expectedLineNumber, lineNumber);
}

test(test1, 58);
test(test2, 65);
test(test3, 72);

eval(test1.toString() + "
eval(test2.toString() + "
eval(test3.toString() + "

test(test1, 2);
test(test2, 3);
test(test3, 3);
