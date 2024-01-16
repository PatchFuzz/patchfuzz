


var low  = newGlobal({ principal: 0       });
var high = newGlobal({ principal: 0xfffff });

low.high = high;
high.low = low;

high.eval("function a() { return saveStack(1, low); }");
var stack = low.eval("high.a();")

assertEq(stack.functionDisplayName, null);
assertEq(stack.parent, null);
assertEq(stack.toString(), "");
