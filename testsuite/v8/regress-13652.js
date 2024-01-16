





async function f1() {
  d8.debugger.enable();
  throw new Error();
}

async function f2() {
  try {
    await f1();
  } catch (_e) {
  }
}

(async () => {
  await f2();
  await f2();
})();

(async () => {
  d8.debugger.disable();
})();

gc();
