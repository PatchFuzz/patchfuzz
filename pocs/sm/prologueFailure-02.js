g = newGlobal({newCompartment: true});
g.parent = this;

function installHook() {
    let calledTimes = 0;
    function hook(frame) {
        calledTimes++;
        switch (calledTimes) {
          case 1:
            
            print(frame.type, "call");
            print(frame.script.displayName.includes("get"), true);
            break;
          case 2:
            
            print(frame.type, "call");
            print(frame.script.displayName.includes("wrapper"), true);
            break;
          case 3:
            print(frame.type, "global");
            
            
            return { return: undefined };

          default:
            
            print(false, true);
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
