function sameValue(a, b) {
    if (a !== b)
        throw new Error(`Expected ${b} but got ${a}`);
}

function test(array, searchElement) {
    return array.lastIndexOf(searchElement);
}
noInline(test);


const obj1 = { value: 1 };
const obj2 = { value: 2 };
const obj3 = { value: 3 };
const array = [obj1, obj2, obj3, obj1, {}, obj2, obj3, {}];
for (let i = 0; i < testLoopCount; i++) {
    sameValue(test(array, obj1), 3);  
    sameValue(test(array, obj2), 5);  
    sameValue(test(array, obj3), 6);  
    sameValue(test(array, {}), -1);   
}
