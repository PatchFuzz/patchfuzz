





(function() {
Empty = function() {};

var FuncImpl = new Function();
Func = function() {
  if (FuncImpl === undefined) {
    try {
      FuncImpl = new Function();
    } catch (e) {
      throw new Error('');
    }
  }
  return FuncImpl();
};
})();

var object = {};
main = function(unused = true) {
  var func = Func();
  Empty(func & object.a & object.a & object.a & object.a !== 0, '');
  Empty(func & object.a !== 0, '');
};

for (let i = 0; i < 40; i++) {
  main();
}
