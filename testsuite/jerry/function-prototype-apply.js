














function addNum ()
{
  var sum = 0;
  for(var i = 0; i < arguments.length; i++)
  {
    sum += arguments[i];
  }
  return sum;
}

var array = [6720, 4, 42];
var obj;

obj = addNum.apply(obj, array);
assert (obj === 6766);


obj = addNum.apply();
assert (obj === 0);

obj = addNum.apply(obj);
assert (obj === 0);


assert (Math.min.apply(null, array) === 4);
assert (Math.max.apply(null, array) === 6720);


try {
  obj = new Function.prototype.apply();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


function throwError ()
{
  throw new ReferenceError ("foo");
}

try {
  obj = throwError.apply(obj, array);
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


Object.defineProperty(array, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj = addNum.apply(obj, array);
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}
