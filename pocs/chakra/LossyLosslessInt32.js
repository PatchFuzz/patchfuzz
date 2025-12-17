function test0(n) {
    var k = 0x3fffffff;
    k <<= 1;
    if(n === 1)
        --k;
    var a = k;
    while(n-- !== 0)
        ++a;
    return a;
}
print("test0: " + test0(2));


function test1() {
    var a = [1];
    a.foo = 2;
    function test1a(i) {
        var j = i & 1;
        return a[i] + a[j];
    }
    return test1a("foo");
}
print("test1: " + test1());




function test2() {
    var i = 0;
    do {
        ++i;
    } while(i < 1);
    return i;
}
print("test2: " + test2());






function test3a(a) {
    a | 0;
    return ~a + 1;
}
print("test3a: " + test3a(-2));
function test3b(a) {
    a | 0;
    return ~a + 1;
}
print(
    "test3b: " +
    test3b(
        {
            valueOf:
                function () {
                    print("test3b: valueOf");
                    return -2;
                }
        }));
function test3c(a) {
    a | 0;
    return a | 0;
}
print("test3c: " + safeCall(test3c, { valueOf: null, toString: null }));



function safeCall(f) {
    var args = [];
    for(var a = 1; a < arguments.length; ++a)
        args.push(arguments[a]);
    try {
        return f.apply(this, args);
    } catch(ex) {
        return ex.name;
    }
}


print("test4");
function makeArrayLength(x) {
    print( Math.floor(x));
  }
function test4(a) {
  
  var func2 = function () {
  };
  func2.length = 1;
  func2.prop4 = 1;
  var __loopvar2 = 0;
  while ((func2.prop4+ 2147483650) |1) {

    if (__loopvar2) {
      break;
    }
    __loopvar2 = 2;
	   makeArrayLength(2147483650);
  }
}
test4();
test4();