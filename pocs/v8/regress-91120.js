var x = 'global';

function f() {
  var x = 'function';
  print(undefined, g);
  try {
    print(undefined, g);
    throw 'catch';
  } catch (x) {
    function g() { return x; }
    print('catch', g());
  }
  print('catch', g());
  return g;
}

print('catch', f()());
