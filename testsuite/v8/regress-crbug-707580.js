



var thrower = { [Symbol.toPrimitive] : function() { throw "I was called!" } };
var heap_number = 4.2;
var smi_number = 23;

assertThrows(() => heap_number.hasOwnProperty(thrower));
assertThrows(() => smi_number.hasOwnProperty(thrower));
