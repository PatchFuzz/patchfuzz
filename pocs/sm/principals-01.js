function check(expected, stack) {
  print("check(" + JSON.stringify(expected) + ") against:\n" + stack);
  count++;

  while (stack.length && expected.length) {
    print(stack.shift(), expected[0]);
    expected = expected.slice(1);
  }

  if (expected.length > 0) {
    throw new Error("Missing frames for: " + expected);
  }
  if (stack.length > 0 && !stack.every(s => s === null)) {
    throw new Error("Unexpected extra frame(s):\n" + stack);
  }
}


function extract(stack) {
  const results = [];
  while (stack) {
    results.push(stack.functionDisplayName);
    stack = stack.parent;
  }
  return results;
}

const low  = newGlobal({ principal: 0       });
const mid  = newGlobal({ principal: 0xffff  });
const high = newGlobal({ principal: 0xfffff });

var count = 0;

     eval('function a() { check("a",        extract(saveStack())); b(); }');
low .eval('function b() { check("b",        extract(saveStack())); c(); }');
mid .eval('function c() { check("cba",      extract(saveStack())); d(); }');
high.eval('function d() { check("dcba",     extract(saveStack())); e(); }');
     eval('function e() { check("ecba",     extract(saveStack())); f(); }');
low .eval('function f() { check("fb",       extract(saveStack())); g(); }');
mid .eval('function g() { check("gfecba",   extract(saveStack())); h(); }');
high.eval('function h() { check("hgfedcba", extract(saveStack()));      }');


     b = low .b;
low .c = mid .c;
mid .d = high.d;
high.e =      e;
     f = low .f;
low .g = mid .g;
mid .h = high.h;

low.check = mid.check = high.check = check;



low. eval("" + extract);
mid. eval("" + extract);
high.eval("" + extract);


a();

print(count, 8);
