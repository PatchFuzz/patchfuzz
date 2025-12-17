"use strict";

const s = saveStack();

;

print(() => s.source = "fake.url",
                       TypeError);

print(() => {
  Object.defineProperty(s.__proto__, "line", {
    get: () => 0
  })
}, TypeError);
