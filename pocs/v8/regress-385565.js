var calls = 0;

function callsFReceiver(o) {
    return [].f.call(new Number(o.m), 1, 2, 3);
}


Array.prototype.f = function() {
    calls++;
    return +this;
};


var o1 = {m: 1};
var o2 = {a: 0, m:1};

%PrepareFunctionForOptimization(callsFReceiver);
var r1 = callsFReceiver(o1);
callsFReceiver(o1);
%OptimizeFunctionOnNextCall(callsFReceiver);
var r2 = callsFReceiver(o1);
print(callsFReceiver);
callsFReceiver(o2);
print(callsFReceiver);

%PrepareFunctionForOptimization(callsFReceiver);
var r3 = callsFReceiver(o1);

print(1, r1);
print(r1 === r2);
print(r2 === r3);

%OptimizeFunctionOnNextCall(callsFReceiver);
r1 = callsFReceiver(o1);
%PrepareFunctionForOptimization(callsFReceiver);
callsFReceiver(o1);
%OptimizeFunctionOnNextCall(callsFReceiver);
r2 = callsFReceiver(o1);
callsFReceiver(o2);
r3 = callsFReceiver(o1);

print(1, r1);
print(r1 === r2);
print(r2 === r3);

print(10, calls);
