



let ar = new Int32Array();
assertThrows(()=> {
  Object.defineProperty(ar, 1073741824, { get: undefined });
}, TypeError);

assertThrows(()=> {
  Object.defineProperty(ar, 2147483648, { get: undefined });
}, TypeError);

assertThrows(()=> {
  Object.defineProperties(ar, { 1073741824: { get: undefined } });
}, TypeError);

assertThrows(()=> {
  Object.defineProperties(ar, { 2147483648: { get: undefined } });
}, TypeError);
