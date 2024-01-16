g = newGlobal({newCompartment: true});
g.parent = this;

function installHook() {
    let calledTimes = 0;
    function hook(frame) {
        calledTimes++;
        switch (calledTimes) {
          case 1:
            
            assertEq(frame.type, "call");
            assertEq(frame.script.displayName.includes("get"), true);
            break;
          case 2:
            
            assertEq(frame.type, "call");
            assertEq(frame.script.displayName.includes("wrapper"), true);
            break;
          case 3:
            assertEq(frame.type, "global");
            
            
            return { return: undefined };

          default:
            
            assertEq(false, true);
        }
    }

    Debugger(parent).onExceptionUnwind = hook;
}


g.eval("(" + installHook + ")()");

var handler = {
    get(t, p) {
        throw new TypeError;
    }
};

function notRun() {}

function wrapper() {
    var f = new Proxy(notRun, handler);
    new f();
}
wrapper();
