function test() {
  for(var i=0; i<2; i++) {
    var a = /a/;
    print(a.lastIndex, 0);
    a.exec("aaa");
    print(a.lastIndex, 0);
  }

  for(var i=0; i<2; i++) {
    var a = /a/g;
    print(a.lastIndex, 0);
    a.exec("aaa");
    print(a.lastIndex, 1);
  }

  for(var i=0; i<2; i++) {
    var a = /a/y;
    print(a.lastIndex, 0);
    a.exec("aaa");
    print(a.lastIndex, 1);
  }
}

test();
test();
