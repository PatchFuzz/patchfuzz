var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var framesEntered = 0;
var framesPopped = 0;
var numSteps = 0;
dbg.onEnterFrame = function (frame) {
    if (frame.type === 'eval')
        return;
    framesEntered++;

    var frameThis = frame.eval('this').return;

    frame.onPop = function() {
        framesPopped++;
        print(frame.eval('this').return, frameThis);
    };

    frame.onStep = function() {
        numSteps++;
        print(frame.eval('this').return, frameThis);
    }

    g.gotThis = frameThis.unsafeDereference();
    print(frame.this, frameThis);
};

g.eval("function nonstrictfun() { return this; }");
g.eval("nonstrictfun.call(Math); print(gotThis, Math);");
g.eval("nonstrictfun.call(true); print(gotThis.valueOf(), true);");
g.eval("nonstrictfun.call(); print(gotThis, this);");

g.eval("function nonstrictfunNoThis() { return 1; }");
g.eval("nonstrictfunNoThis.call(Math); print(gotThis, Math);");
g.eval("nonstrictfunNoThis.call(true); print(gotThis.valueOf(), true);");
g.eval("nonstrictfunNoThis.call(); print(gotThis, this);");

print(framesEntered, 6);
print(framesPopped, 6);
print(numSteps > 15, true);
