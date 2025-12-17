;

function f() {
    return f.caller.p;
}



print(() => new class extends f {}, TypeError);
