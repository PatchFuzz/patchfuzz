print(scriptedCallerGlobal(), this);

var g = newGlobal();
print(g.evaluate("scriptedCallerGlobal()"), g);
print(g.scriptedCallerGlobal(), this);
