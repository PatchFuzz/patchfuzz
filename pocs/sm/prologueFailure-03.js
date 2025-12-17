g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("(" + function() {
    let calledTimes = 0;
    Debugger(parent).onExceptionUnwind = function(frame) {
        switch (calledTimes++) {
          case 0:
            print(frame.older.type, "global");
            break;
          case 1:
            
            
            print(frame.older, null);
            return { return: undefined };
          default:
            print(false, true);
        }
    }
} + ")()");

var handler = {
    get() {
        r;
    }
};
new(new Proxy(function() {}, handler));
