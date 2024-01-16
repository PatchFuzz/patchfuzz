













assert(this === globalThis)
assert(this.globalThis === globalThis)

globalThis = "X"
assert(globalThis === "X")
