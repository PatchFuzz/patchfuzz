













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

assert (array1.find (bigger_than_10) === 12);

function less_than_0 (element) {
  if (element == 0) {
    throw new Error ("zero");
  }
  return element < 0;
}

try {
  array1.find (less_than_0);
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

assert (JSON.stringify (inventory.find (isCherries)) === '{"name":"cherries","quantity":5}');

if (arrow_is_available) {
  assert (eval ("inventory.find (fruit => fruit.name === 'bananas')") === inventory[1]);
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

assert (src_array.find (isPrime) === undefined);

src_array = [4, 5, 8, 12];
array_index = 0;
assert (src_array.find (isPrime) === 5);



var obj = {};
Object.defineProperty (obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });
obj.find = Array.prototype.find;

try {
  obj.find ();
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}

var data = { 0: 1, 2: -3, 3: "string" }
assert (Array.prototype.find.call (data, function (e) { return e < 5; }) === undefined);


var obj = {}
obj.length = 1;
Object.defineProperty (obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });
obj.find = Array.prototype.find

try {
  obj.find (function () { return undefined; });
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


var array = [1, 2, 3];

try {
  array.find (5);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


try {
  array.find ();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


assert (array.find (function (e) { return e < 2 }, {}, 8, 4, 5, 6, 6) === 1);

function func (element) {
  return element > 8;
}


function f() { delete arr[1]; };
var arr = [0, 1, 2, 3];
Object.defineProperty(arr, '0', { 'get' : f });
Array.prototype.find.call(arr, func);


var count = 0;

[,,,].find(function() { count++; return false; });
assert (count == 3);
