;

globalThis.callOrder = [];

const m = parseModule(`
using x = {
  [Symbol.dispose]() {
    globalThis.callOrder.push("x");
  }
}

using y = {
  [Symbol.dispose]() {
    globalThis.callOrder.push("y");
  }
}
`);

moduleLink(m);
moduleEvaluate(m);

print(globalThis.callOrder, ["y", "x"]);
