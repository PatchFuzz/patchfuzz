













var arrow_is_available = false;

try {
  assert (eval ("(f => 5) ()") === 5);
  arrow_is_available = true;
} catch (e) {
  assert (e instanceof SyntaxError);
}

var array1 = [5, 12, 0, 8, 130, 44];

function bigger_than_10 (element) {
  return element > 10;
}

assert (array1.findIndex (bigger_than_10) === 1);

function less_than_0 (element) {
  if (element == 0) {
    throw new Error ("zero");
  }
  return element < 0;
}

try {
  array1.findIndex (less_than_0);
  assert (false);
} catch (e) {
  assert (e instanceof Error);
  assert (e.message === "zero");
}

var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries (fruit) {
    return fruit.name === 'cherries';
}

assert (JSON.stringify (inventory.findIndex (isCherries)) === "2");

if (arrow_is_available) {
  assert (eval ("inventory.findIndex (fruit => fruit.name === 'bananas')") === 1);
}


var src_array = [4, 6, 8, 12];
var array_index = 0;

function isPrime (element, index, array) {
  assert (array_index++ === index);
  assert (array === src_array)
  assert (element === array[index]);

  var start = 2;
  while (start <= Math.sqrt (element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

assert (src_array.findIndex (isPrime) === -1);

src_array = [4, 5, 8, 12];
array_index = 0;
assert (src_array.findIndex (isPrime) === 1);


try {
  Array.prototype.findIndex.call (5);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


var obj = {};
Object.defineProperty (obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });
obj.findIndex = Array.prototype.findIndex;

try {
  obj.findIndex ();
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}

var data = { 0: 1, 2: -3, 3: "string" }
assert (Array.prototype.findIndex.call (data, function (e) { return e < 5; }) === -1);


var obj = {}
obj.length = 1;
Object.defineProperty (obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });
obj.findIndex = Array.prototype.findIndex;

try {
  obj.findIndex (function () { return undefined; });
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


var array = [1, 2, 3];

try {
  array.findIndex (5);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


try {
  array.findIndex ();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


assert (array.findIndex (function (e) { return e < 2 }, {}, 8, 4, 5, 6, 6) === 0);

function func (element) {
  return element > 8;
}


function f() { delete arr[1]; };
var arr = [0, 1, 2, 3];
Object.defineProperty(arr, '0', { 'get' : f });
Array.prototype.findIndex.call(arr, func);


var count = 0;

[,,,].findIndex(function() { count++; return false; });
assert (count == 3);
