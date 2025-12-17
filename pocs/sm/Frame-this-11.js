var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onEnterFrame = function (frame) {
    if (frame.type === 'eval')
        return;
    hits++;

    var frameThis = frame.eval('this').return;
    if (frameThis !== null && typeof frameThis === "object")
        g.gotThis = frameThis.unsafeDereference();
    else
        g.gotThis = frameThis;

    print(frame.this, frameThis);
    print(frame.eval('this').return, frameThis);
};


g.eval("function strictfun() { 'use strict'; return this; }");
g.eval("strictfun.call(Math); print(gotThis, Math);");
g.eval("strictfun.call(true); print(gotThis, true);");
g.eval("strictfun.call();     print(gotThis, undefined);");


g.eval("function strictfunNoThis() { 'use strict'; }");
g.eval("strictfunNoThis.call(Math); print(gotThis, Math);");
g.eval("strictfunNoThis.call(true); print(gotThis, true);");
g.eval("strictfunNoThis.call(null); print(gotThis, null);");


g.eval("function nonstrictfun() { return this; }");
g.eval("nonstrictfun.call(Math); print(gotThis, Math);");
g.eval("nonstrictfun.call(null); print(gotThis, this);");
g.eval("nonstrictfun.call();     print(gotThis, this);");


g.eval("function nonstrictfunNoThis() {}");
g.eval("nonstrictfunNoThis.call(Math); print(gotThis, Math);");
g.eval("nonstrictfunNoThis.call(null); print(gotThis, this);");
g.eval("nonstrictfunNoThis.call();     print(gotThis, this);");

print(hits, 12);
