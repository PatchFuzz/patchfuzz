async_hooks.createHook({ promiseResolve() { throw new Error(); } }).enable()

import("./does_not_exist.js").then();
function target() {
  isFinite.__proto__.__proto__ = new Proxy(target, {
    get() { return Promise.resolve(); }
  })
}
target();

function runNearStackLimit(f) {
  function t() {
    try {
      return t();
    } catch (e) {
      return f();
    }
  }
  return t();
}

function __f_2() {
  return runNearStackLimit(() => {
      return new Promise(function () {
    });
  });
}
__f_2().then();
__f_2().then();
