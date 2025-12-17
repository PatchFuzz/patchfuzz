function funOverridden1(x, y) { return x + y; }
funOverridden1.call = x => x + 1;
funOverridden1.apply = x => x + 2;


function funOverridden2(x, y) { return x + y; }
funOverridden2.call = Math.abs;
funOverridden2.apply = Math.abs;


function funOverridden3(x, y) { return x + y; }
funOverridden3.myCall = Function.prototype.call;
funOverridden3.myApply = Function.prototype.apply;

function f() {
    var arr = [1, 2];
    for (var i = 0; i < 100; i++) {
        print(funOverridden1.call(i, i), i + 1);
        print(funOverridden1.apply(i, i), i + 2);

        print(funOverridden2.call(i, i), i);
        print(funOverridden2.apply(i, i), i);

        print(funOverridden3.myCall(null, i, i), i + i);
        print(funOverridden3.myApply(null, arr), 3);
    }
}
f();
