print(() => {
  %DefineObjectOwnProperty(null, 'foo', 1);
}, TypeError, /Cannot set properties of null \(setting 'foo'\)/);

print(() => {
  %DefineObjectOwnProperty(null, { toString() { return 'foo' } }, 1);
}, TypeError, /Cannot set properties of null/);
