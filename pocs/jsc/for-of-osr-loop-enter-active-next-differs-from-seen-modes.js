function foo() {
  Object.fromEntries(arguments);
  Object.fromEntries([]);
}

new Promise(foo);
