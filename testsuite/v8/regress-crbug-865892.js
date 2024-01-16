





let ah = async_hooks.createHook(
{
  init(asyncId, type) {
    if (type !== 'PROMISE') { return; }
    assertThrows('asyncIds.push(asyncId);');
  }
});
ah.enable();

async function foo() {
  let x = { toString() { return 'modules-skip-1.js' } };
  assertThrows('await import(x);');
}
foo();
