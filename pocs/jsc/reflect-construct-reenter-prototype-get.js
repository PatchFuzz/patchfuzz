var buffer = new ArrayBuffer(3);

var newTarget = function () {
}.bind(null)

let i = 0

Object.defineProperty(newTarget, 'prototype', {
  get: function () {
    let iter = i
    ++i;
    
    if (iter >= 1)
        return { }
    
    Reflect.construct(Object, [], newTarget);
    
    return { };
  }
});


var result = Reflect.construct(Object, [], newTarget);