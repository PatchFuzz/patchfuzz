


var count = 0;





function check(expected, stack) {
  print("check(" + JSON.stringify(expected) + ") against:\n" + stack);
  count++;

  
  
  const frames = stack
    .split("\n")
    .filter(f => f.match(/^.@/))
    .map(f => f.replace(/@.*$/g, ""));

  
  assertEq(frames.length, expected.length);
  for (var i = 0; i < expected.length; i++) {
    assertEq(frames[i], expected[i]);
  }
}

var low = newGlobal({ principal: 0 });
var mid = newGlobal({ principal: 0xffff });
var high = newGlobal({ principal: 0xfffff });

     eval('function a() { check("a",        saveStack().toString()); b(); }');
low .eval('function b() { check("b",        saveStack().toString()); c(); }');
mid .eval('function c() { check("cba",      saveStack().toString()); d(); }');
high.eval('function d() { check("dcba",     saveStack().toString()); e(); }');
     eval('function e() { check("ecba",     saveStack().toString()); f(); }');
low .eval('function f() { check("fb",       saveStack().toString()); g(); }');
mid .eval('function g() { check("gfecba",   saveStack().toString()); h(); }');
high.eval('function h() { check("hgfedcba", saveStack().toString());      }');


     b = low .b;
low .c = mid .c;
mid .d = high.d;
high.e =      e;
     f = low .f;
low .g = mid .g;
mid .h = high.h;

low.check = mid.check = high.check = check;


a();

assertEq(count, 8);

