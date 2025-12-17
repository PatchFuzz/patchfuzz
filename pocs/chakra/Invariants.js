function test0() {
    var a;
    for(var i = 0; i < 1; ++i)
        a = (0x40000000 | 0) % 3;
    return a;
}
print("test0: " + test0());




function test1() {
    var c = 1;
    var f = (1 !== 0);
    f = f & 21037030;
    var g;
    for(var __loopvar1 = 0; c < (g = (((-f) ? (f * i32[(1) % 256]) : 1))) && __loopvar1 < 3; c++ + __loopvar1++) {
    }
    return g;
}
print("test1: " + test1());




function test2() {
    for(var i = 0; i < 1; ++i) {
        var o = 0;
        for(var j = 0; j < 1; ++j)
            o.p &= 1;
    }
}
print("test2: " + test2());


function test3() {
  var func1 = function () {
    return '6' + 'b!%$' + 'caller';
  };
  var func2 = function () {
     return '6' + 'b!%$' + 'caller';
  };
  
  var ary = Array();
  func1();
  for (var v1 = 0; v1 < 8; v1++) {
    print(func2());
  }
  print('subset_of_ary = ' + ary.slice());
}
test3();
