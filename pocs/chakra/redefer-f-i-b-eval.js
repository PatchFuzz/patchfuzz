eval(
'function outer() {' +
'    var f = "f";' +
'    if (true) {' +
'        let o = { x : function() { if (f !== "f") { print("fail"); throw 1; } } };' +
'        function i() {}' +
'        o.x();' +
'    }' +
'}');

for (var i = 0; i < 100; i++)
    arr = [10000];
outer();
print('pass');
