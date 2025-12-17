let cases = [
  function* onNormalExitFromFunction_VarBinding() {
    var tmp = yield 1;
    consumeValue(tmp);
  },

  function* onNormalExitFromFunction_LetBinding() {
    let tmp = yield 1;
    consumeValue(tmp);
  },

  function* onNormalExitFromBlock() {
    if (typeof onNormalExitFromBlock === 'function') {
      let tmp = yield 1;
      consumeValue(tmp);
    }
    yield 2;
  },

  function* onNormalExitFromCStyleForLet() {
    for (let tmp = yield 1; tmp !== null; tmp = null) {
      consumeValue(tmp);
    }
    yield 2;
  },

  function* onNormalExitFromForLetOf() {
    for (let tmp of [yield 1]) {
      consumeValue(tmp);
    }
    yield 2;
  },

  function* onNormalExitFromForConstOf() {
    for (const tmp of [yield 1]) {
      consumeValue(tmp);
    }
    yield 2;
  },

  function* onNormalExitFromForConstDestructuringOf() {
    for (const {a, b, c, d} of [yield 1]) {
      consumeValue(a);
    }
    yield 2;
  },

  function* onNormalExitFromForConstArrayDestructuringOf() {
    for (const [x] of [[yield 1]]) {
      consumeValue(x);
    }
    yield 2;
  },

  function* onNormalExitFromBlockInLoop() {
    for (var i = 0; i < 2; i++) {
      if (i == 0) {
        let tmp = yield 1;
        consumeValue(tmp);
      } else {
        yield 2;
      }
    }
  },

  function* onBreakFromBlock() {
    x: {
      let tmp = yield 1;
      consumeValue(tmp);
      break x;
    }
    yield 2;
  },

  function* onExitFromCatchBlock() {
    try {
      throw yield 1;
    } catch (exc) {
      consumeValue(exc);
    }
    yield 2;
  },
];

var consumeValue;

function runTest(g) {
  consumeValue = eval("_ => {}");

  let generator = g();
  let result = generator.next();
  print(result.done, false);
  print(result.value, 1);
  let object = {};
  let weakRef = new WeakRef(object);
  result = generator.next(object);
  print(result.value, result.done ? undefined : 2);

  object = null;
  clearKeptObjects();
  gc();
  print(weakRef.deref(), undefined);
}

for (let g of cases) {
  runTest(g);
}
