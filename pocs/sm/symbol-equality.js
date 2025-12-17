setJitCompilerOption("ion.warmup.trigger", 10);

function simpleEquality() {
    for (var i = 0; i < 150; i++) {
        var x = Symbol();
        var y = Symbol();
        print(x === y, false);
        print(x !== y, true);
        print(x == y, false);
        print(x != y, true);
    }
}

function equalOperands() {
    for (var i = 0; i < 150; i++) {
        var x = Symbol();
        print(x === x, true);
        print(x !== x, false);
    }
}

function bitwiseCompare() {
    var ar = [true, false, Symbol(), null, undefined];
    var s = Symbol();
    ar.push(s);

    for (var i = 0; i < 150; i++) {
        for (var j = 0; j < ar.length; j++) {
            var equal = (j == ar.indexOf(s));

            print(ar[j] === s, equal);
            print(ar[j] !== s, !equal);
            print(ar[j] == s, equal);
            print(ar[j] != s, !equal);
        }
    }
}

equalOperands();
simpleEquality();
bitwiseCompare();
