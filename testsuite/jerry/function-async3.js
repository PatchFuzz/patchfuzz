















var proto1 = Object.getPrototypeOf(async () => {})
var proto2 = Object.getPrototypeOf(async function () {})

assert(proto1 === proto2)
assert(typeof proto1 === "object")
assert(proto1[Symbol.toStringTag] === "AsyncFunction")
assert(typeof proto1.constructor === "function")
assert(proto1.constructor.name === "AsyncFunction")

var successCount = 0
var f = proto1.constructor("p", "assert(await p === 'Res'); successCount++")
f(Promise.resolve("Res"))

function __checkAsync() {
  assert(successCount === 1)
}
