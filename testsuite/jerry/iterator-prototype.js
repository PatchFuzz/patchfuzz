













var array = [];
var array_iterator = array[Symbol.iterator]();
var array_iterator_prototype = Object.getPrototypeOf (array_iterator);
var iterator_prototype = Object.getPrototypeOf (array_iterator_prototype);
var iterator_prototype_iterator = iterator_prototype[Symbol.iterator]();

assert (iterator_prototype === iterator_prototype_iterator);
