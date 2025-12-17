function f(v) {
  this.func = v;
}

var o1 = new f(f);
var d = 1.4;
var o2 = new f(d);
o2.func = 1.8;
print(1.4, d)
