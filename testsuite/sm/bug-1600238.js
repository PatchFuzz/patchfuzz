gczeal(0);
newGlobal();
nukeAllCCWs();
function f() {
    global = newGlobal({
        newCompartment: true
    });
    try {
        return global.eval("new FinalizationRegistry(function(){})");
    } catch (e) {
        if (e instanceof TypeError && e.message.includes('dead')) {
            
            
            quit();
        }
        throw e;
    }
}
r = f();
r.register({}, {}, {});
startgc();
