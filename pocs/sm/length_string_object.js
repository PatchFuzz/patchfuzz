var expected = "3,6,4,3,6,4,3,6,4,3,6,4,";
var actual = '';

function f() {
    var ss = [new String("abc"), new String("foobar"), new String("quux")];

    for (var i = 0; i < 12; ++i) {
        actual += ss[i%3].length + ',';
    }
}

f();

print(actual, expected);


function g(s) {
    return new String(s).length;
}

print(g("x"), 1); 
print(g("x"), 1); 
print(g("x"), 1); 

function h(s) {
    var x = new String(s);
    for (var i = 0; i < 100; i++)
        x[i] = i;
    return x.length;
}

print(h("x"), 1);
print(h("x"), 1);
print(h("x"), 1);
