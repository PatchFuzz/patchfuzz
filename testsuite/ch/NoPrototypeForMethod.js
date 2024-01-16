




var failed = false;

var o = {
    f() { }
}

if (o.f.hasOwnProperty("prototype")) {
    failed = true;
    WScript.Echo("Failed: a method within an object literal should not have a prototype");
}

try {
    new o.f();
    failed = true;
    WScript.Echo("Failed: a method within an object literal should not have a prototype and thus new should not be valid");
}
catch (e) {
}

class C {
    f() { }
}

if (new C().f.hasOwnProperty("prototype")) {
    failed = true;
    WScript.Echo("Failed: a method within a class should not have a prototype");
}

if (!(new C().constructor.hasOwnProperty("prototype"))) {
    failed = true;
    WScript.Echo("Failed: a class' constructor should have a prototype");
}

if (!failed) {
    WScript.Echo("Pass");
}
