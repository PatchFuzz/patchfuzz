var s1 =

'function f1() {' +
'    var a = "a";' +
'    function g1() {' +
'        print(a);' +
'    }' +
'    return g1;' +
'}';

eval(s1);
print('done s1');
var foo1 = f1();
print('done f1');
foo1();

var s2 =

'var a = "global a";' +
'function f2(i) {' +
'    with ({a:"with a"}) {' +
'        var g2 = function() {' +
'            print(a);' +
'        };' +
'        function g2_() {' +
'            print(a);' +
'        }' +
'    }' +
'    switch(i) {' +
'        case 0: return g2;' +
'        case 1: return g2_;' +
'    }' +
'}';

eval(s2);
print('done s2');
var foo2 = f2(0);
var foo2_ = f2(1);
print('done f2');
foo2();
foo2_();

var s3 = 

'function f3(i) {' +
'    var a = "f3 a";' +
'    function g3(i) {' +
'        try {' +
'            throw "catch";' +
'        }' +
'        catch(a) {' +
'            function g4_() {' +
'                print(a);' +
'            }' +
'            var g4 = function() {' +
'                print(a);' +
'            };' +
'            return i == 0 ? g4 : g4_;' +
'        }' +
'    }' +
'    return g3(i);' +
'}';

eval(s3);
print('done s3');
var foo3 = f3(0);
var foo3_ = f3(1);
print('done f3');
foo3();
foo3_();
