var x;
var a = new Float32Array([1,2, 4, 6, 8, 11, NaN, 1/0, -3])
var val = 2.1*a[1]*a[0]*a[1*2*3*0]*a[1*1]*1.0;
print(8.4, val);


var a;
var t = true;
var res = [2.5, 2];
for (var i = 0; i < 2; i++) {
  if (t) {
    a = 1.5;
  } else {
    a = true;
  }
  print(res[i], a+1);
  t = false;
}
