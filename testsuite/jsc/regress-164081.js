




function shouldEqual(actual, expected) {
    if (actual != expected) {
        throw "ERROR: expect " + expected + ", actual " + actual;
    }
}

var count = 10000;

var g_arr = new Array(count);
for (var z = 0; z < count; z+=2) {
    testcase(z);
}
function testcase(z) {
    var visited = [];

    g_arr[z]= Function('\'use strict\'');
    g_arr[z][0]=5;
    try {
        g_arr[z+1] = new Uint32Array(8); 
        g_arr[z+1][6] = 0x41414141; 
        g_arr[z+1][7] = 0x41414141; 
        visited.push("set_caller");
        g_arr[z].caller= 1;
    } catch (e) {
        visited.push("caught_exception");
    }
    shouldEqual(visited, "set_caller,caught_exception");
}

