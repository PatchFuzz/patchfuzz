var count = 0;





function check(expected, stack) {
  print("check(" + JSON.stringify(expected) + ") against:\n" + stack);
  count++;

  
  
  var split = stack.split(/(.)?@.*\n/).slice(0, -1);
  if (split[split.length - 1] === undefined)
    split = split.slice(0, -2);

  
  print(split.length, expected.length * 2);
  for (var i = 0; i < expected.length; i++)
    print(split[i * 2 + 1], expected[i]);
}

var low = newGlobal({ principal: 0 });
var mid = newGlobal({ principal: 0xffff });
var high = newGlobal({ principal: 0xfffff });

     eval('function a() { check("a",        Error().stack); b(); }');
low .eval('function b() { check("b",        Error().stack); c(); }');
mid .eval('function c() { check("cba",      Error().stack); d(); }');
high.eval('function d() { check("dcba",     Error().stack); e(); }');


     eval('function e() { check("ecba",     Error().stack); f(); }');

low .eval('function f() { check("fb",       Error().stack); g(); }');
mid .eval('function g() { check("gfecba",   Error().stack); h(); }');
high.eval('function h() { check("hgfedcba", Error().stack);      }');


     b = low .b;
low .c = mid .c;
mid .d = high.d;
high.e =      e;
     f = low .f;
low .g = mid .g;
mid .h = high.h;

low.check = mid.check = high.check = check;


a();

print(count, 8);
