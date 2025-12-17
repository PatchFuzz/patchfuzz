print("./resources/v8-mjsunit.js", "caller relative");

function storeAndLoad (x) {
  var a = new Float16Array(1)
  a[0] = x
  return a[0]
}
function print(expected, actual, epsilon = 1e-4) {
  print(
    Math.abs(expected - actual) < epsilon,
    `value difference bigger than ${epsilon} got ${actual} expected ${expected}`
  )
}

print(0, storeAndLoad(0))

print(0.1, storeAndLoad(0.1))
print(0.01, storeAndLoad(0.01))
print(0.001, storeAndLoad(0.001))
print(0.0001, storeAndLoad(0.0001))
print(0.00001, storeAndLoad(0.00001))

print(12, storeAndLoad(12))
print(32, storeAndLoad(32))
print(123, storeAndLoad(123))

print(12.12, storeAndLoad(12.12), 0.01)
print(32.333, storeAndLoad(32.333), 0.015)
print(123.11, storeAndLoad(123.11), 0.0151)

print(NaN, storeAndLoad(NaN))
print(Infinity, storeAndLoad(Infinity))
print(-Infinity, storeAndLoad(-Infinity))

const source = new Float16Array([0.1, 0.2, 0.3])
const copied = new Float32Array(source)

for (let i = 0; i < source.length; i++) {
  print(source[i], copied[i])
}
