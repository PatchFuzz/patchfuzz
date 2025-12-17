var dbgA = new Debugger;
var logA = '';

var dbgB = new Debugger;
var logB = '';

var g1 = newGlobal({newCompartment: true});
g1.eval('function g1f() { print("Weltuntergang"); }');
var DOAg1 = dbgA.addDebuggee(g1);
var DOAg1f = DOAg1.getOwnPropertyDescriptor('g1f').value;
DOAg1f.script.setBreakpoint(0, { hit: () => { logA += '1'; } });

var DOBg1 = dbgB.addDebuggee(g1);
var DOBg1f = DOBg1.getOwnPropertyDescriptor('g1f').value;
DOBg1f.script.setBreakpoint(0, { hit: () => { logB += '1'; } });


var g2 = newGlobal({newCompartment: true});
g2.eval('function g2f() { print("Mokushi"); }');

var DOAg2 = dbgA.addDebuggee(g2);
var DOAg2f = DOAg2.getOwnPropertyDescriptor('g2f').value;
DOAg2f.script.setBreakpoint(0, { hit: () => { logA += '2'; } });

var DOBg2 = dbgB.addDebuggee(g2);
var DOBg2f = DOBg2.getOwnPropertyDescriptor('g2f').value;
DOBg2f.script.setBreakpoint(0, { hit: () => { logB += '2'; } });

print(logA, '');
print(logB, '');
g1.g1f();
g2.g2f();
print(logA, '12');
print(logB, '12');
logA = logB = '';


dbgA.removeDebuggee(g2);
dbgB.removeDebuggee(g1);
print(logA, '');
print(logB, '');
g1.g1f();
g2.g2f();
print(logA, '1');
print(logB, '2');
logA = logB = '';


dbgA.addDebuggee(g2);
dbgB.addDebuggee(g1);
print(logA, '');
print(logB, '');
g1.g1f();
g2.g2f();
print(logA, '1');
print(logB, '2');
logA = logB = '';


DOAg2f.script.setBreakpoint(0, { hit: () => { logA += '2'; } });
print(logA, '');
print(logB, '');
g2.g2f();
g1.g1f();
print(logA, '21');
print(logB, '2');
logA = logB = '';

DOBg1f.script.setBreakpoint(0, { hit: () => { logB += '1'; } });
print(logA, '');
print(logB, '');
g2.g2f();
g1.g1f();
print(logA, '21');
print(logB, '21');
