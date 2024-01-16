
load(libdir + 'asserts.js');
load(libdir + 'iteration.js');
load(libdir + 'eqArrayHelper.js');


assertThrowsInstanceOf(() => { [a, b, c] = {0: 0, 1: 1, 2: 2} }, TypeError);

var nextcalls = 0, donecalls = 0, valuecalls = 0;
var doneafter = 0;
var iterable = {};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      assertEq(arguments.length, 0, 'iterator.next() should be called with no arguments');
      nextcalls++;
      return {
        get done() {
          donecalls++;
          return --doneafter < 0;
        },
        get value() {
          valuecalls++;
          return valuecalls;
        }
      };
    }
  }
};

function assertIterable(expectCalls, fn, expectResult) {
  [nextcalls, donecalls, valuecalls, doneafter] = [0,0,0, expectCalls[3]];
  assertEqArray(fn(iterable), expectResult);
  assertEq(nextcalls,  expectCalls[0], 'calls to iterator.next()');
  assertEq(donecalls,  expectCalls[1], 'getting iterator.next().done');
  assertEq(valuecalls, expectCalls[2], 'getting iterator.next().value');
}

assertIterable([1,1,1,1],
  it => { var [a] = it; return [a]; },
  [1]);
assertIterable([2,2,1,1],
  it => { var [a,b,c] = it; return [a,b,c]; },
  [1,undefined,undefined]);
assertIterable([2,2,1,1],
  it => { var [a,b,...rest] = it; return [a,b,...rest]; },
  [1,undefined]);
assertIterable([5,5,4,4],
  it => { var [,,...rest] = it; return rest; },
  [3,4]);


assertIterable([5,5,4,4],
  it => {
    assertThrowsInstanceOf(function () {
      "use strict";
      [...{0: "".x}] = it;
    }, TypeError);
    return [];
  },
  []);

var arraycalls = 0;
var ArrayIterator = Array.prototype[Symbol.iterator];
Array.prototype[Symbol.iterator] = function () {
  arraycalls++;
  return ArrayIterator.apply(this, arguments);
};

var [...rest] = iterable;
assertEq(arraycalls, 0, 'calls to Array#@@iterator');



var [...[...rest]] = iterable;
assertEq(arraycalls, 1, 'calls to Array#@@iterator');


function loop(fn) {
  var i = 1e4;
  while (i--) fn();
}

loop(() => { doneafter = 4; var [a] = iterable; return a; });
loop(() => { doneafter = 4; var [a,b,...[...rest]] = iterable; return rest; });




delete Array.prototype[Symbol.iterator];
assertThrowsInstanceOf(() => { var [a,b] = [1,2]; }, TypeError);
Array.prototype[Symbol.iterator] = ArrayIterator;


a = undefined, b = undefined, c = undefined;
var obj = {};
obj[Symbol.iterator] = function* () {
	
	yield 1;
	assertEq(a, 1);
	yield 2;
	yield 3;
	assertEq(b, 3);
	yield 4;
	yield 5;
	
	assertEq(c, undefined);
};
[a, , b, ...c] = obj;
assertEqArray(c, [4,5]);




assertThrowsValue(function () {
  try {
    Array.prototype[Symbol.iterator] = function () { throw 'from iterator'; };
    throw [1, 2];
  } catch ([x, y]) {
    throw 'not reached';
  }
}, 'from iterator');
Array.prototype[Symbol.iterator] = ArrayIterator;

