
function opaquePutByValOnInt32ArrayEarlyOutOfBounds(array, index, value)
{
    array[index] = value;
}
noInline(opaquePutByValOnInt32ArrayEarlyOutOfBounds);

function testInt32ArrayEarlyOutOfBounds()
{
    
    var int32Array = new Array(10);
    for (var i = 0; i < 10; ++i) {
        opaquePutByValOnInt32ArrayEarlyOutOfBounds(int32Array, i, i);
        var value = int32Array[i];
        if (value !== i)
            throw "Failed opaquePutByValOnInt32ArrayEarlyOutOfBounds(int32Array, i, i) warmup with i = " + i + " value = " + value;
    }
    opaquePutByValOnInt32ArrayEarlyOutOfBounds(int32Array, 1042, 1);
    var value = int32Array[1042];
    if (value !== 1)
        throw "Failed opaquePutByValOnInt32ArrayEarlyOutOfBounds(int32Array, 1042, 1) value = " + value;

    var length = int32Array.length;
    if (int32Array.length !== 1043)
        throw "Incorrect int32Array.length, length = " + length;


    
    for (var i = 0; i < 1e4; ++i) {
        for (var j = 0; j < 10; ++j) {
            opaquePutByValOnInt32ArrayEarlyOutOfBounds(int32Array, j, i);
            var value = int32Array[j];
            if (value !== i)
                throw "Failed opaquePutByValOnInt32ArrayEarlyOutOfBounds(int32Array, j, i) in-bounds with i = " + i + " j = " + j + " value = " + value;
        }
    }
}
testInt32ArrayEarlyOutOfBounds();



function opaquePutByValOnStringArrayHotOutOfBounds(array, index, value)
{
    array[index] = value;
}
noInline(opaquePutByValOnStringArrayHotOutOfBounds);

function testStringArrayHotOutOfBounds()
{
    
    var stringArray = new Array(10);
    for (var i = 0; i < 1e2; ++i) {
        for (var j = 0; j < 10; ++j) {
            opaquePutByValOnStringArrayHotOutOfBounds(stringArray, j, "" + i);
            var value = stringArray[j];
            if (value !== "" + i)
                throw "Failed opaquePutByValOnStringArrayHotOutOfBounds(stringArray, j, i) in-bounds with i = " + i + " j = " + j + " value = " + value;
        }
    }

    
    opaquePutByValOnStringArrayHotOutOfBounds(stringArray, 513, 42);
    var value = stringArray[513];
    if (value !== 42)
        throw "Failed opaquePutByValOnStringArrayHotOutOfBounds(stringArray, 513, 42), value = " + value;

    
    for (var i = 0; i < 1e3; ++i) {
        for (var j = 0; j < 10; ++j) {
            opaquePutByValOnStringArrayHotOutOfBounds(stringArray, j, "" + i);
            var value = stringArray[j];
            if (value !== "" + i)
                throw "Failed opaquePutByValOnStringArrayHotOutOfBounds(stringArray, j, i) in-bounds with i = " + i + " j = " + j + " value = " + value;
        }
    }

    
    for (var j = 514; j <= 1025; ++j)
        opaquePutByValOnStringArrayHotOutOfBounds(stringArray, j, "" + j);

    for (var j = 514; j <= 1025; ++j) {
        var value = stringArray[j];
        if (value !== "" + j)
            throw "Failed opaquePutByValOnStringArrayHotOutOfBounds(stringArray, j, j) in-bounds with j = " + j + " value = " + value;
    }
}
testStringArrayHotOutOfBounds();
