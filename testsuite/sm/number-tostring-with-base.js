function testConstantBaseFastPathTemplate(xs) {
  assertEq(xs.length, $BASE * $BASE);
  for (let j = 0; j < 200;) {
    
    for (let i = 0; i < $BASE * $BASE; ++i, ++j) {
      assertEq(i.toString($BASE), xs[i]);
    }
  }
}



for (let base = 2; base <= 36; ++base) {
  let fn = Function(`return ${testConstantBaseFastPathTemplate}`.replaceAll("$BASE", base))();
  let xs = Array.from({length: base * base}, (_, i) => i.toString(base));
  for (let i = 0; i < 2; ++i) {
    fn(xs);
  }
}

function testConstantBaseTemplate(xs) {
  assertEq(xs.length, $BASE * $BASE * 2);
  for (let j = 0; j < 200;) {
    
    for (let i = 0; i < $BASE * $BASE * 2; ++i, ++j) {
      assertEq(i.toString($BASE), xs[i]);
    }
  }
}



for (let base = 2; base <= 36; ++base) {
  let fn = Function(`return ${testConstantBaseTemplate}`.replaceAll("$BASE", base))();
  let xs = Array.from({length: base * base * 2}, (_, i) => i.toString(base));
  for (let i = 0; i < 2; ++i) {
    fn(xs);
  }
}

function testVariableBaseFastPathTemplate(xs, ys) {
  assertEq(ys.length, 2);
  assertEq(ys[0], ys[1]);
  let base = ys[0];

  assertEq(xs.length, base * base);

  for (let j = 0; j < 200;) {
    
    for (let i = 0; i < base * base; ++i, ++j) {
      assertEq(i.toString(ys[i & 1]), xs[i]);
    }
  }
}



for (let base = 2; base <= 36; ++base) {
  let fn = Function(`return ${testVariableBaseFastPathTemplate}`)();
  let xs = Array.from({length: base * base}, (_, i) => i.toString(base));
  for (let i = 0; i < 2; ++i) {
    fn(xs, [base, base]);
  }
}

function testVariableBaseTemplate(xs, ys) {
  assertEq(ys.length, 2);
  assertEq(ys[0], ys[1]);
  let base = ys[0];

  assertEq(xs.length, base * base * 2);

  for (let j = 0; j < 200;) {
    
    for (let i = 0; i < base * base * 2; ++i, ++j) {
      assertEq(i.toString(ys[i & 1]), xs[i]);
    }
  }
}



for (let base = 2; base <= 36; ++base) {
  let fn = Function(`return ${testVariableBaseTemplate}`)();
  let xs = Array.from({length: base * base * 2}, (_, i) => i.toString(base));
  for (let i = 0; i < 2; ++i) {
    fn(xs, [base, base]);
  }
}
