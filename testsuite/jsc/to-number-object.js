function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`bad value: ${String(actual)}`);
}

function test1(object)
{
    
    return Number(object);
}
noInline(test1);

function test12(object)
{
    
    return Number(object) <= 42;
}
noInline(test12);

var object1 = { valueOf() { return 42; } };
for (var i = 0; i < 1e4; ++i) {
    shouldBe(test1(object1), 42);
    shouldBe(test12(object1), true);
}

function test2(object)
{
    
    return Number(object);
}
noInline(test2);

function test22(object)
{
    
    return Number(object) <= 42;
}
noInline(test22);

var object2 = { valueOf() { return 42.195; } };
for (var i = 0; i < 1e4; ++i) {
    shouldBe(test2(object2), 42.195);
    shouldBe(test22(object2), false);
}

function test3(object)
{
    
    return Number(object);
}
noInline(test3);

function test32(object)
{
    
    return Number(object) <= 42;
}
noInline(test32);

var value = 42;
var object3 = { valueOf() { return value; } };
for (var i = 0; i < 1e4; ++i) {
    shouldBe(test3(object3), value);
    shouldBe(test32(object3), true);
}
value = 42.195;
for (var i = 0; i < 1e4; ++i) {
    shouldBe(test3(object3), value);
    shouldBe(test32(object3), false);
}
