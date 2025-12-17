var arr = [];
var str = new String('x');

function f(a,b) {
  a[b] = 1;
}

f(arr, 0);
f(str, 0);
f(str, 0);


%SetKeyedProperty(str, 1, 'y');
