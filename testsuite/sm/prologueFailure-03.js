g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("(" + function() {
    let calledTimes = 0;
    Debugger(parent).onExceptionUnwind = function(frame) {
        switch (calledTimes++) {
          case 0:
            assertEq(frame.older.type, "global");
            break;
          case 1:
            
            
            assertEq(frame.older, null);
            return { return: undefined };
          default:
            assertEq(false, true);
        }
    }
} + ")()");

var handler = {
    get() {
        r;
    }
};
new(new Proxy(function() {}, handler));
