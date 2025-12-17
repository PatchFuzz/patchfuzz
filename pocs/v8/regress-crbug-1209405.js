let ar = new Int32Array();
print(()=> {
  Object.defineProperty(ar, 1073741824, { get: undefined });
}, TypeError);

print(()=> {
  Object.defineProperty(ar, 2147483648, { get: undefined });
}, TypeError);

print(()=> {
  Object.defineProperties(ar, { 1073741824: { get: undefined } });
}, TypeError);

print(()=> {
  Object.defineProperties(ar, { 2147483648: { get: undefined } });
}, TypeError);
