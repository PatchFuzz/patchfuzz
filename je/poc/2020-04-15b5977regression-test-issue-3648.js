













var func = function () {};
var boundFunc = func.bind();
var externalFunc = print;
var builtinFunc = unescape;

[func, boundFunc, externalFunc, builtinFunc].forEach(function (e) {
  print(Array.prototype.sort.call(e) === e);
})

