





"use strict";

function Message(message) {
  this.message = message;
}

function Inlined(input) {
  var dummy = arguments[1] === undefined;
  if (input instanceof Message) {
    return input;
  }
  print("unreachable, but we must create register allocation complexity");
  return [];
}

function Process(input) {
  var ret = [];
  ret.push(Inlined(input[0], 1, 2));
  return ret;
};
%PrepareFunctionForOptimization(Process);
var input = [new Message("TEST PASS")];

Process(input);
Process(input);
%OptimizeFunctionOnNextCall(Process);
var result = Process(input);
assertEquals("TEST PASS", result[0].message);
