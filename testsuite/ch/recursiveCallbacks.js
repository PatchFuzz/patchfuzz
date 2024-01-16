




function r(t) {
    if (!(this instanceof r)) {
        return new r(t);
    }
}

function foo() {}

r(foo);
r(foo);
r(foo);

WScript.Echo("Passed");