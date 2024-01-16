





try {
Object.prototype.__defineGetter__(0, function(){});
assertThrows("x");
} catch(e) { print("Caught: " + e); }

try {
(function() {
  let asyncIds = [], triggerIds = [];
  let ah = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
      if (type !== 'PROMISE') { return; }
      assertThrows("asyncIds.push(asyncId);");
      assertThrows("triggerIds.push(triggerAsyncId)");
    },
  });
  ah.enable();
  async function foo() {}
  foo();
})();
} catch(e) { print("Caught: " + e); }
try {
  var obj = {prop: 7};
  assertThrows("nonexistent(obj)");
} catch(e) { print("Caught: " + e); }
