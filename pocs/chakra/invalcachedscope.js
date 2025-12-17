function outer() {
    var x = "yes!";
    function inner() {
        eval('print(x); x = "no!"');
    }
    function inner2() {
        return inner;
    }
    return inner2();
}

var escaped = [2];
for (var i = 0; i < 2; i++) {
    escaped[i] = outer();
}
for (i = 0; i < escaped.length; i++) {
    escaped[i]();
}



function outer2() {
    var x = "yes!";
    function inner() {
        eval('print(x); x = "no!"');
    }
    function inner2() {
        return eval('inner');
    }
    return inner2();
}

for (i = 0; i < 2; i++) {
    escaped[i] = outer2();
}
for (i = 0; i < escaped.length; i++) {
    escaped[i]();
}
