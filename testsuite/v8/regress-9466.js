



const o = [];
o.__proto__ = {};
o.constructor = function() {};
o.constructor[Symbol.species] = function f() {};
o.__proto__ = Array.prototype;
assertEquals(o.constructor[Symbol.species], o.concat([1,2,3]).constructor);
