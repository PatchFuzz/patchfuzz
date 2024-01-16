function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

var hello0 = "Hello"; 
var hello1 = createNonRopeNonAtomString("Hello");

function test(string)
{
    var result = [0, 0, 0, 0];
    var object = { };
    for (var i = 0; i < 10000; ++i) {
        var index = i % 4;
        result[index] = string.charCodeAt(index);
        if (i === 5000) {
            
            object[string];
        }
    }
    return result;
}
noInline(test);

for (var i = 0; i < 1000; ++i) {
    var newString = createNonRopeNonAtomString("Hello");
    var result = test(newString)
    shouldBe(result[0], 72);
    shouldBe(result[1], 101);
    shouldBe(result[2], 108);
    shouldBe(result[3], 108);
}
