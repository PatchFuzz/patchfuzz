

function must_throw (str) {
  try {
    eval ("switch (1) { default: " + str + "}");
    assert (false);
  }
  catch (e) {
  }

  try {
    eval (str);
    assert (false);
  }
  catch (e) {
  }
}


var strictF = new Function('"use strict"');

assert(strictF.hasOwnProperty('caller') === false);
assert(strictF.hasOwnProperty('arguments') === false);

must_throw("strictF.caller")
must_throw("strictF.arguments")
must_throw("strictF.caller = 1")
must_throw("strictF.arguments = 2")


var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var generatorF = new GeneratorFunction()

assert(generatorF.hasOwnProperty('caller') === false);
assert(generatorF.hasOwnProperty('arguments') === false);

must_throw("generatorF.caller")
must_throw("generatorF.arguments")
must_throw("generatorF.caller = 1")
must_throw("generatorF.arguments = 2")


async function asyncF() {}

assert(asyncF.hasOwnProperty('caller') === false);
assert(asyncF.hasOwnProperty('arguments') === false);

must_throw("asyncF.caller")
must_throw("asyncF.arguments")
must_throw("asyncF.caller = 1")
must_throw("asyncF.arguments = 2")


var f = function () {};
var boundF = f.bind();

assert(boundF.hasOwnProperty('caller') === false);
assert(boundF.hasOwnProperty('arguments') === false);

must_throw("boundF.caller")
must_throw("boundF.arguments")
must_throw("boundF.caller = 1")
must_throw("boundF.arguments = 2")
