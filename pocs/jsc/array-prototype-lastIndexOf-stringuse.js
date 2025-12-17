function sameValue(a, b) {
    if (a !== b)
        throw new Error(`Expected ${b} but got ${a}`);
}

function test(array, searchElement) {
    return array.lastIndexOf(searchElement);
}
noInline(test);


var array = ["foo", "bar", "baz", "foo", "qux", "bar", "baz", "qux"];
for (let i = 0; i < testLoopCount; i++) {
    sameValue(test(array, "foo"), 3);  
    sameValue(test(array, "bar"), 5);  
    sameValue(test(array, "baz"), 6);  
    sameValue(test(array, "qux"), 7);  
    sameValue(test(array, "xxx"), -1); 
}
