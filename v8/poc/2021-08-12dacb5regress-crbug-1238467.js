




const ah = async_hooks.createHook({});
ah.enable();

import("./does_not_exist.js").then();

function target() {
  isFinite.__proto__.__proto__ = new Proxy(target, {
    get() {
      return Promise.resolve();
  }})
}
target();
