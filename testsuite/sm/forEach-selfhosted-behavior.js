



var functionCall = Function.prototype.call;

function throwSyntaxError()
{
  throw new SyntaxError("Function.prototype.call incorrectly called");
}

function lalala() {}

Function.prototype.call = throwSyntaxError;

new Set().forEach(throwSyntaxError);
new Set([1]).forEach(lalala);
new Set([{}, 4]).forEach(lalala);

Function.prototype.call = function() { this.add(3.141592654); };

new Set().forEach(throwSyntaxError);
new Set(["foo"]).forEach(lalala);
new Set([undefined, NaN]).forEach(lalala);

var callCount = 0;
Function.prototype.call = function() { callCount++; };

new Set().forEach(throwSyntaxError);
new Set([new Number]).forEach(lalala);
new Set([true, new Boolean(false)]).forEach(lalala);

assertEq(callCount, 0);
