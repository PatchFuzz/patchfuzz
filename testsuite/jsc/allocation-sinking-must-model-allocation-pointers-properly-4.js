














let count = 0;
function bool() { 
    ++count;
    return !!(count % 2);
}
noInline(bool);

let o;
function effects() { if (!o) return; o.f = 42; }
noInline(effects);

function escape(theO) { o = theO; }
noInline(escape);

function bar() {
    let o = {};
    let o2 = {};
    let p;
    for (let i = 0; i < 10; ++i) {
        o.f = o2;
        effects();
        let x = o.f;
        escape(o);
        if (bool())
            continue;
        p = x;
    }
    return p;
}
noInline(bar);

for (let i = 0; i < 10000; ++i) {
    if (bar() !== 42)
        throw new Error;
}
