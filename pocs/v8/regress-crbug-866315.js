let num = 42;
let ah = async_hooks.createHook({});

num.__proto__.__proto__ = ah;
print('num.enable()');
print('num.disable()');
