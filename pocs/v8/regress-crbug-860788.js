try {
Object.prototype.__defineGetter__(0, function(){});
print("x");
} catch(e) { print("Caught: " + e); }

try {
(function() {
  let asyncIds = [], triggerIds = [];
  let ah = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
      if (type !== 'PROMISE') { return; }
      print("asyncIds.push(asyncId);");
      print("triggerIds.push(triggerAsyncId)");
    },
  });
  ah.enable();
  async function foo() {}
  foo();
})();
} catch(e) { print("Caught: " + e); }
try {
  var obj = {prop: 7};
  print("nonexistent(obj)");
} catch(e) { print("Caught: " + e); }
