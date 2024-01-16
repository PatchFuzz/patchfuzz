


"use strict";

const s = saveStack();

load(libdir + 'asserts.js');

assertThrowsInstanceOf(() => s.source = "fake.url",
                       TypeError);

assertThrowsInstanceOf(() => {
  Object.defineProperty(s.__proto__, "line", {
    get: () => 0
  })
}, TypeError);
