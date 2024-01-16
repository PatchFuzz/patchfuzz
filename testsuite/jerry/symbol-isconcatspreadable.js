














var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);
assert(JSON.stringify(alphaNumeric) === '["a","b","c",1,2,3]');
assert(alphaNumeric.length === 6);

numeric[Symbol.isConcatSpreadable] = false;
alphaNumeric = alpha.concat(numeric);
assert(JSON.stringify(alphaNumeric) === '["a","b","c",[1,2,3]]');
assert(alphaNumeric.length === 4);

numeric[Symbol.isConcatSpreadable] = true;


var fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 4,
  1: 5
}

var numericArray = numeric.concat(fakeArray);
assert(JSON.stringify(numericArray) === '[1,2,3,4,5]');
assert(numericArray.length === 5);

fakeArray[Symbol.isConcatSpreadable] = false;
numericArray = numeric.concat(fakeArray);
assert(JSON.stringify(numericArray) === '[1,2,3,{"0":4,"1":5,"length":2}]');
assert(numericArray.length === 4);


var obj = { 0: 'd' };

var alphaObj = alpha.concat(obj);
assert(JSON.stringify(alphaObj) === '["a","b","c",{"0":"d"}]');
assert(alphaObj.length === 4);

obj[Symbol.isConcatSpreadable] = true;
alphaObj = alpha.concat(obj);
assert(JSON.stringify(alphaObj) === '["a","b","c"]');
assert(alphaObj.length === 3);


var bool = true;
var numericBool = numeric.concat(bool);
assert(JSON.stringify(numericBool) === '[1,2,3,true]');
assert(numericBool.length === 4);

bool[Symbol.isConcatSpreadable] = false;
numericBool = numeric.concat(bool);
assert(JSON.stringify(numericBool) === '[1,2,3,true]');
assert(numericBool.length === 4);


var array1 = [];
var array2 = [];
Object.defineProperty(array2, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  array1.concat(array2);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}
