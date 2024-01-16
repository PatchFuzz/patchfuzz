









var low = newGlobal({ principal: 0 });
var high = newGlobal({ principal: 0xfffff });

low.high = high;
high.low = low;

high.eval("function a() { return saveStack(0, low); }");
low.eval("function b() { return high.a(); }")

var stack = low.b();

assertEq(stack.functionDisplayName, "b");
assertEq(stack.parent, null);
