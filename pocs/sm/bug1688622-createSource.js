for (const global of Debugger().findAllGlobals()) {
    try {
        global.createSource(13);
    } catch (e) {
        print(e.message, "Debugger.Object is not a debuggee global");
    }
}
