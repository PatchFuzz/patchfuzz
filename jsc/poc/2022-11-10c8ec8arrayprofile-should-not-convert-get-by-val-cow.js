function assertEq(a, b) {
    if (a !== b)
        throw new Error("values not the same: " + a + " and " + b);
}

var allowDoubleShape = print();

function withArrayArgInt32(i, array) {
    let result = array[i];
    assertEq(print(array), "CopyOnWriteArrayWithInt32");
}
noInline(withArrayArgInt32);

function withArrayLiteralInt32(i) {
    let array = [0,1,2];
    let result = array[i];
    assertEq(print(array), "CopyOnWriteArrayWithInt32");
}
noInline(withArrayLiteralInt32);


function withArrayArgDouble(i, array) {
    let result = array[i];
    if (allowDoubleShape)
        assertEq(print(array), "CopyOnWriteArrayWithDouble");
    else
        assertEq(print(array), "CopyOnWriteArrayWithContiguous");
}
noInline(withArrayArgDouble);

function withArrayLiteralDouble(i) {
    let array = [0,1.3145,2];
    let result = array[i];
    if (allowDoubleShape)
        assertEq(print(array), "CopyOnWriteArrayWithDouble");
    else
        assertEq(print(array), "CopyOnWriteArrayWithContiguous");        
}
noInline(withArrayLiteralDouble);

function withArrayArgContiguous(i, array) {
    let result = array[i];
    assertEq(print(array), "CopyOnWriteArrayWithContiguous");
}
noInline(withArrayArgContiguous);

function withArrayLiteralContiguous(i) {
    let array = [0,"string",2];
    let result = array[i];
    assertEq(print(array), "CopyOnWriteArrayWithContiguous");
}
noInline(withArrayLiteralContiguous);

function test() {
    withArrayArgInt32(0, [0,1,2]);
    withArrayArgDouble(0, [0,1.3145,2]);
    withArrayArgContiguous(0, [0,"string",2]);

    withArrayLiteralInt32(0);
    withArrayLiteralDouble(0);
    withArrayLiteralContiguous(0);
}

for (let i = 0; i < 10000; i++)
    test();
