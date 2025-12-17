function C() {}




var o = new C();
o.x = 42;
o = null;



gc();


o = new C();


for (var p in o) {
  print(false);
}
