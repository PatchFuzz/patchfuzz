





let num = 42;
let ah = async_hooks.createHook({});

num.__proto__.__proto__ = ah;
assertThrows('num.enable()');
assertThrows('num.disable()');
