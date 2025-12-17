gczeal(2,21);

var gi = newGlobal();

var gv = newGlobal();
gi.evaluate('function f() {}', {global: gv});

var dbg = new Debugger;
