function instantiate(moduleBase64, importObject) {
    let bytes = Uint8Array.fromBase64(moduleBase64);
    return WebAssembly.instantiate(bytes, importObject);
  }

const report = function() { };
const isJIT = callerIsBBQOrOMGCompiled;
const extra = {isJIT};
(async function () {

let fn0 = function (a0, a1, a2) {
a0?.toString(); a1?.toString(); a2?.toString();
return [1574n, -10, -1];
};
let tag7 = new WebAssembly.Tag({parameters: ['i64', 'i32', 'i32']});
let tag8 = new WebAssembly.Tag({parameters: ['f32', 'anyfunc', 'i64']});
let tag9 = new WebAssembly.Tag({parameters: ['i64', 'anyfunc']});
let global1 = new WebAssembly.Global({value: 'f64', mutable: true}, 596401.8113845346);
let global2 = new WebAssembly.Global({value: 'f64', mutable: true}, 45872.9845351013);
let global3 = new WebAssembly.Global({value: 'anyfunc', mutable: true}, null);
let global4 = new WebAssembly.Global({value: 'i64', mutable: true}, 3913557490n);
let global5 = new WebAssembly.Global({value: 'i32', mutable: true}, 3038033284);
let global6 = new WebAssembly.Global({value: 'i32', mutable: true}, 2542291009);
let table0 = new WebAssembly.Table({initial: 93, element: 'externref'});
let table1 = new WebAssembly.Table({initial: 24, element: 'anyfunc', maximum: 256});
let table4 = new WebAssembly.Table({initial: 97, element: 'externref', maximum: 212});
let table5 = new WebAssembly.Table({initial: 78, element: 'anyfunc', maximum: 669});
let table6 = new WebAssembly.Table({initial: 18, element: 'anyfunc', maximum: 23});
let m0 = {fn0, global1, global2, global3, global5, table3: table0, table5, table6, tag8, tag9, tag10: tag7, tag13: tag7};
let m1 = {global4, global7: 3098420685, tag7, tag11: tag8, tag12: tag8};
let m2 = {global0: 42196913, global6, table0, table1, table2: table0, table4, table7: table0};
let importObject0 =  ({extra, m0, m1, m2});
let i0 = await instantiate('AGFzbQEAAAABQwpgAAF/YAN+f38Bb2ADfn9/A35/f2ADfn9/AGADfXB+AnBwYAN9cH4DfXB+YAN9cH4AYAJ+cABgAn5wAn5wYAJ+cAAC0AIZAm0wA2ZuMAACBWV4dHJhBWlzSklUAAACbTEEdGFnNwQAAwJtMAR0YWc4BAAGAm0wBHRhZzkEAAkCbTAFdGFnMTAEAAMCbTEFdGFnMTEEAAYCbTEFdGFnMTIEAAYCbTAFdGFnMTMEAAMCbTIHZ2xvYmFsMAN/AAJtMAdnbG9iYWwxA3wBAm0wB2dsb2JhbDIDfAECbTAHZ2xvYmFsMwNwAQJtMQdnbG9iYWw0A34BAm0wB2dsb2JhbDUDfwECbTIHZ2xvYmFsNgN/AQJtMQdnbG9iYWw3A38AAm0yBnRhYmxlMAFvAF0CbTIGdGFibGUxAXABGIACAm0yBnRhYmxlMgFvAFcCbTAGdGFibGUzAW8ASgJtMgZ0YWJsZTQBbwFh1AECbTAGdGFibGU1AXABTp0FAm0wBnRhYmxlNgFwARIXAm0yBnRhYmxlNwFvAAADBAMCAAkEKAlvAUneB28BV+oGcAEoogdvAVrfBW8BWNEGbwAwbwEEigZvADtwAGIFBgED3xe6HA0dDgAHAAYABgAHAAcABwAGAAYABwAHAAYABgAGAAYGBwF/AUGZAQsHyQEXB3RhYmxlMTMBDAd0YWJsZTEyAQoIZ2xvYmFsMTADCAd0YWJsZTEwAQgEdGFnNQQLB2dsb2JhbDkDBgR0YWcyBAcDZm4yAAMDZm4xAAIGdGFibGU4AQIEdGFnNAQKB21lbW9yeTACAAd0YWJsZTE3ARAEdGFnNgQMB3RhYmxlMTYBDwd0YWJsZTExAQkGdGFibGU5AQUEdGFnMwQIBHRhZzEEBgdnbG9iYWw4AwUHdGFibGUxNAENB3RhYmxlMTUBDgR0YWcwBAMJzgMHBgVBOQtwFdIEC9IDC9IAC9IBC9IDC9ICC9IBC9IDC9IAC9ICC9IBC9ICC9IDC9IAC9ICC9IDC9IDC9ICC9IDC9IDC9ICCwVwOtIAC9ICC9ICC9IDC9IBC9ICC9IEC9IDC9IAC9IAC9IEC9IDC9IBC9ICC9IAC9IBC9ICC9IDC9IAC9IAC9ICC9IDC9ICC9IEC9IAC9ICC9IBC9IAC9IEC9IDC9IDC9IAC9IDC9IAC9IEC9IDC9IDC9IDC9IAC9IBC9ICC9IBC9IAC9IBC9IBC9IBC9ICC9IAC9ICC9IEC9ICC9IDC9IBC9IAC9IEC9IDC9IDC9IECwIBQQULAAkAAQMEAQQCAQQFcDXSBAvSAAvSAQvSAAvSBAvSAwvSAAvSAAvSAgvSAwvSAQvSAAvSAgvSAAvSAwvSAQvSAAvSAgvSAgvSAAvSAgvSBAvSAAvSAwvSAgvSAwvSAwvSAgvSBAvSAAvSAQvSAQvSBAvSAgvSAAvSAwvSAAvSAwvSAQvSBAvSAgvSAQvSAQvSAgvSBAvSAQvSAQvSAQvSAAvSAQvSAAvSBAvSBAsGBUETC3AC0gAL0gILBgZBAAtwAtIBC9IDCwYKQQALcAHSBAsMAQIK8iMDzAsGAnABbwN/AX4BfQF8QqCEuCMjAxAEQRtDWXLNiSADJAMjBj8AIAUhBUECcAR9QYsBQQNB
let {fn1, fn2, global8, global9, global10, memory0, table8, table9, table10, table11, table12, table13, table14, table15, table16, table17, tag0, tag1, tag2, tag3, tag4, tag5, tag6} =  (i0.instance.exports);
table8.set(61, table15);
table0.set(65, table10);
global8.value = 0;
global4.value = 0n;
global1.value = 0;
report('progress');
try {
  for (let k=0; k<25; k++) {
  let zzz = fn1(global4.value, k, global10.value);
  if (!(zzz instanceof Array)) { throw new Error('expected array but return value is '+zzz); }
if (zzz.length != 3) { throw new Error('expected array of length 3 but return value is '+zzz); }
let [r0, r1, r2] = zzz;
r0?.toString(); r1?.toString(); r2?.toString();
  }
} catch (e) {
  if (e instanceof WebAssembly.Exception) {
  } else if (e instanceof TypeError) {
  if (e.message === 'an exported wasm function cannot contain a v128 parameter or return value') {} else { throw e; }
  } else if (e instanceof WebAssembly.RuntimeError || e instanceof RangeError) {} else { throw e; }
}
report('progress');
try {
  for (let k=0; k<26; k++) {
  let zzz = fn2();
  zzz?.toString();
  }
} catch (e) {
  if (e instanceof WebAssembly.Exception) {
  } else if (e instanceof TypeError) {
  if (e.message === 'an exported wasm function cannot contain a v128 parameter or return value') {} else { throw e; }
  } else if (e instanceof WebAssembly.RuntimeError || e instanceof RangeError) {} else { throw e; }
}
report('progress');
try {
  for (let k=0; k<23; k++) {
  let zzz = fn1(global4.value, global5.value, k);
  if (!(zzz instanceof Array)) { throw new Error('expected array but return value is '+zzz); }
if (zzz.length != 3) { throw new Error('expected array of length 3 but return value is '+zzz); }
let [r0, r1, r2] = zzz;
r0?.toString(); r1?.toString(); r2?.toString();
  }
} catch (e) {
  if (e instanceof WebAssembly.Exception) {
  } else if (e instanceof TypeError) {
  if (e.message === 'an exported wasm function cannot contain a v128 parameter or return value') {} else { throw e; }
  } else if (e instanceof WebAssembly.RuntimeError || e instanceof RangeError) {} else { throw e; }
}
report('progress');
try {
  for (let k=0; k<24; k++) {
  let zzz = fn2();
  zzz?.toString();
  }
} catch (e) {
  if (e instanceof WebAssembly.Exception) {
  } else if (e instanceof TypeError) {
  if (e.message === 'an exported wasm function cannot contain a v128 parameter or return value') {} else { throw e; }
  } else if (e instanceof WebAssembly.RuntimeError || e instanceof RangeError) {} else { throw e; }
}
let tables = [table0, table4, table13, table10, table8, table16, table11, table14, table15, table1, table5, table6, table12, table17, table9];
for (let table of tables) {
for (let k=0; k < table.length; k++) { table.get(k)?.toString(); }
}
})().then(() => {
  report('after');
}).catch(e => {
  report('error');
})
