var assert = function (result, expected, message) {
  if (result !== expected) {
    throw new Error('Error in assert. Expected "' + expected + '" but was "' + result + '":' + message );
  }
};

var assertThrow = function (cb, errorText) {
    var error = null;
    try {
        cb();
    } catch (e) {
         error = e.toString();
    }
    if (error === null) 
        throw new Error('Expected error');
    if (error !== errorText)
        throw new Error('Expected error ' + errorText + ' but was ' + error);
};

{ 
  eval('{ function foo() {} }');
  print(this.hasOwnProperty("foo"), true);
  print(typeof foo, 'function');
}

Object.defineProperty(this, "globalNonWritable", {
  value: false,
  configurable: true,
  writable: false,
  enumerable: true
});
eval("{function globalNonWritable() { return 1; }}");
var globalNonWritableDescriptor
    = Object.getOwnPropertyDescriptor(this, "globalNonWritable");
print(globalNonWritableDescriptor.enumerable, true);

Object.freeze(this);
{
  let error = false;
  try {
    eval('{ function boo() {} }');
  } catch (e) {
    error = true;
  }
  print(this.hasOwnProperty("boo"), false);
  print(error, false);
  print(() => boo, 'ReferenceError: Can\'t find variable: boo');
}
