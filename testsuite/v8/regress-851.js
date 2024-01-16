


























var i = 0;
for (var i = 0; i < 10000; i++) {
  Object.freeze({});
  assertNull(JSON.stringify({x: null}).match(/\0/));
}
