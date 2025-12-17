function f() {
  let x = [0,0,0,0,0];
  Object.defineProperty(x, 'length', {value : 4, enumerable : true});
}

print(f, TypeError);
