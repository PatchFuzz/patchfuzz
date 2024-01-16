













var symbol = Symbol();
var arr = [{}];
with (arr.pop()){
    arr.push(symbol.valueOf());
}

try {
  arr.length = String.fromCharCode(Object.freeze(arr));
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
