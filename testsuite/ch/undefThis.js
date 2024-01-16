






function echo(x) { WScript.Echo(x + ''); }

try {
    echo((1, Object.prototype.valueOf)());
}
catch (e) {
    echo(e);
}

try {
    var foo = Object.prototype.valueOf;
    echo(foo());
}
catch (e) {
    echo(e);
}

(function () {
    try {
        echo((1, Object.prototype.valueOf)());
    }
    catch (e) {
        echo(e);
    }

    try {
        var foo = Object.prototype.valueOf;
        echo(foo());
    }
    catch (e) {
        echo(e);
    }
})();


function f1() {
    "use strict";
    var f1a = function () {
        echo(this === undefined);
    }
    f1a();
}
f1();

function f2() {
    function f2a() {
        "use strict";
        echo(this === undefined);
    }
    f2a();
}
f2();

function x() {
    "use strict";
    echo(this);
}
x.bind()();
