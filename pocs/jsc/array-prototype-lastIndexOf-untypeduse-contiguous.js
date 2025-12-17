function sameValue(a, b) {
    if (a !== b)
        throw new Error(`Expected ${b} but got ${a}`);
}

function test(array, searchElement) {
    return array.lastIndexOf(searchElement);
}
noInline(test);


var array = [{}, 3.4, 3.5, 4.5, 5.4, 3.5, 4.5, 5.4];
for (let i = 0; i < testLoopCount; i++) {
    sameValue(test(array, 3.5), 5);  
    sameValue(test(array, 4.5), 6);  
    sameValue(test(array, 5.4), 7);  
    sameValue(test(array, 5.9), -1); 
}
