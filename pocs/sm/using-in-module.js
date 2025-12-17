globalThis.called = false;

const m = parseModule(`
using x = {
  [Symbol.dispose]() {
    globalThis.called = true;
  }
}
`);

moduleLink(m);
moduleEvaluate(m);

print(globalThis.called, true);
