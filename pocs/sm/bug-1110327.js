x = newGlobal({newCompartment: true})
x.t = this

Debugger(x).findObjects()
