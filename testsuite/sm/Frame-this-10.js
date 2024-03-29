


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var framesEntered = 0;
var framesPopped = 0;
var numSteps = 0;
dbg.onEnterFrame = function (frame) {
    if (frame.type === 'eval')
        return;
    framesEntered++;

    var frameThis = frame.this;
    assertEq(frame.this, frameThis);

    frame.onPop = function() {
        framesPopped++;
        assertEq(frame.this, frameThis);
    };

    frame.onStep = function() {
        numSteps++;
        assertEq(frame.this, frameThis);
    }

    g.gotThis = frameThis.unsafeDereference();
};

g.eval("function nonstrictfun() { return this; }");
g.eval("nonstrictfun.call(Math); assertEq(gotThis, Math);");
g.eval("nonstrictfun.call(true); assertEq(gotThis.valueOf(), true);");
g.eval("nonstrictfun.call(); assertEq(gotThis, this);");

g.eval("function nonstrictfunNoThis() { return 1; }");
g.eval("nonstrictfunNoThis.call(Math); assertEq(gotThis, Math);");
g.eval("nonstrictfunNoThis.call(true); assertEq(gotThis.valueOf(), true);");
g.eval("nonstrictfunNoThis.call(); assertEq(gotThis, this);");

assertEq(framesEntered, 6);
assertEq(framesPopped, 6);
assertEq(numSteps > 15, true);
