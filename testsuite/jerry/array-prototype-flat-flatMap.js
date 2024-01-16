














Array.prototype.equals = function (array) {
  if (this.length != array.length)
    return false;

  for (var i = 0; i < this.length; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i]))
        return false;
      }
      else if (this[i] != array[i]) {
        return false;
    }
  }

  return true;
}

assert ([1, 4, 9].flat(2).equals([1, 4, 9]))
assert ([[4,9]].flat(0).equals([[4,9]]))
assert ([[4,9]].flat(1).equals([4,9]))
assert ([1, 4, [9,3,[2,4,[3,4]]]].flat(5).equals([1, 4, 9, 3, 2, 4, 3, 4]));

var array1 = [1,3,4]
var array2 = [array1,array1]
assert(array2.flat(1).equals([1,3,4,1,3,4]))
assert(array2.flat(0).equals([[1,3,4],[1,3,4]]))

var array3 = [array2]
assert(array3.flat(0).equals([[[1,3,4],[1,3,4]]]))
assert(array3.flat(1).equals([[1,3,4],[1,3,4]]))
assert(array3.flat(2).equals([1,3,4,1,3,4]))

var array4 = []
assert(array4.flat(10).equals([]))

var array5 = [null, array4]
assert(array5.flat(10).equals([null]))


assert([1, 2, 3, 4].flatMap(x => [x, x * 2]).equals([1,2,2,4,3,6,4,8]))
assert([1, 2, 3, 4].flatMap(x => [x, x * x]).equals([1,1,2,4,3,9,4,16]))
assert(array1.flatMap(x => [x, x * 2]).equals([1,2,3,6,4,8]))
assert(array4.flatMap(x => [x, x * 2]).equals([]))

function check_flat (map, depth)
{
  try {
    map.flat (depth)
    assert (false)
  } catch (e) {
    assert (e instanceof TypeError);
  }
}

function check_flat_map (map, mapper)
{
  try {
    map.flatMap (mapper)
    assert (false)
  } catch (e) {
    assert (e instanceof TypeError);
  }
}


check_flat ([1,2], Symbol())


var a = new Array();
a.constructor = null;
check_flat (a,1)


check_flat_map ([1,2], null)


check_flat_map (a,x => [x, x * x])


var array_2 = [1,2]
Object.defineProperty (array_2, '0', { 'get' : function () { throw new TypeError (); } });
check_flat (array_2, 1)
check_flat_map (array_2,x => [x, x * x])


var revocable = Proxy.revocable ({}, {});
var proxy = revocable.proxy;
revocable.revoke();
var array_3 = [proxy,2]
check_flat (array_3, 1)


var array_4_1 = [1,2]
Object.defineProperty (array_4_1, '0', { 'get' : function () { throw new TypeError (); } });
var array_4 = [array_4_1,1,2]
check_flat (array_4, 1)


var array_5 = [array_2,1,2]
check_flat (array_2, 1)

var A = function(_length) {
  Object.defineProperty(this, "0", {
    writable: true,
    configurable: false,
  });
};

var arr = [1];
arr.constructor = {};
arr.constructor[Symbol.species] = A;

check_flat_map (arr, A)


var array_6 = []
array_6.length = 2
array_6.flat()


var array_7 = [1,2]
var f = function () {
  throw new TypeError()
}
check_flat_map (array_7, f)

var obj = new Proxy ([], { get(t, p, r) {
  if (p === 'length') {
    throw new TypeError();
  }
}})
