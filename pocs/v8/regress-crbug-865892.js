let ah = async_hooks.createHook(
{
  init(asyncId, type) {
    if (type !== 'PROMISE') { return; }
    print('asyncIds.push(asyncId);');
  }
});
ah.enable();

async function foo() {
  let x = { toString() { return 'modules-skip-1.js' } };
  print('await import(x);');
}
foo();
