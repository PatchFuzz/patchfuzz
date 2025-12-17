;

async function throwsOnNonObjectDisposable() {
  await using a = 1;
}
throwsOnNonFunctionDispose().catch(e => {
  print(e instanceof TypeError, true);
});

async function throwsOnNonFunctionDispose() {
  await using a = { [Symbol.asyncDispose]: 1 };
}

let reason = null;
throwsOnNonFunctionDispose().catch(e => {
  reason = e;
});
drainJobQueue();
print(reason instanceof TypeError, true);
