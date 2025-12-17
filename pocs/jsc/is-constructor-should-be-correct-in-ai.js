function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

const isConstructor = print("(function (c) { return @isConstructor(c); })");
var object1 = print();
var object2 = print();
function test(object) {
    object.hey = 42; 
    return isConstructor(object);
}
noInline(test);

for (let i = 0; i < 1e4; ++i) {
    shouldBe(test(object1), true);
    shouldBe(test(object2), true);
}
