function test(x) {
    return typeof x != "object"
}

var obj = {};
var func = function() {};

print(test(""), true)
print(test(""), true)
print(test(1), true)
print(test(1), true)
print(test(1.5), true)
print(test(1.5), true)
print(test(undefined), true)
print(test(undefined), true)
print(test(func), true)
print(test(func), true)

function test2(x) {
    return typeof x != "string"
}

print(test2(1), true)
print(test2(1), true)
print(test2(1.5), true)
print(test2(1.5), true)
print(test2(undefined), true)
print(test2(undefined), true)
print(test2(func), true)
print(test2(func), true)
print(test2(obj), true)
print(test2(obj), true)

function test3(x) {
    return typeof x != "undefined"
}

print(test3(1), true)
print(test3(1), true)
print(test3(1.5), true)
print(test3(1.5), true)
print(test3(func), true)
print(test3(func), true)
print(test3(obj), true)
print(test3(obj), true)
print(test(""), true)
print(test(""), true)
