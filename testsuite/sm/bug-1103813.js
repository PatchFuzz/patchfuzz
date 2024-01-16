
newGlobal({
    newCompartment: true,
    invisibleToDebugger: true
})

x = (new Debugger).findObjects()
