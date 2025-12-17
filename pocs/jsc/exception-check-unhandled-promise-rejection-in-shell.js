async function foo() {
  await undefined;
  throw new Error();
}

setUnhandledRejectionCallback(foo);
foo();
drainMicrotasks();
