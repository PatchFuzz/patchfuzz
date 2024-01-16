



var boundFunction = (function(){}).bind();

var instance = new Uint8Array()
instance.constructor = {
  [Symbol.species]: boundFunction
};

assertThrows(() => instance.map(each => each * 2), TypeError);
