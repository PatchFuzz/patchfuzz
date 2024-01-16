



load(libdir + 'asserts.js');

function f() {
    return f.caller.p;
}



assertThrowsInstanceOf(() => new class extends f {}, TypeError);
