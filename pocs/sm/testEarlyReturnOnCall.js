var g = newGlobal({newCompartment: true});
g.eval("var success = false");
g.eval("function ponies() {}");
g.eval("function foo() { ponies(); success = false }");

var dbg = new Debugger(g);
dbg.onEnterFrame = function(frame) {
    
    
    var step = 0;
    frame.onStep = function() {
        ++step;
        if (step == 2) {
            g.success = true;
            return;
        }
        if (step == 3)
            return { return: undefined }
    }
    frame.onPop = function() { new Error();  }
}

g.foo();
print(g.success, true);
