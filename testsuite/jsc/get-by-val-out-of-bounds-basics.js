
function opaqueGetByValOnInt32ArrayEarlyOutOfBounds(array, index)
{
    return array[index];
}
noInline(opaqueGetByValOnInt32ArrayEarlyOutOfBounds);

function testInt32ArrayEarlyOutOfBounds()
{
    
    var int32Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i <= 10; ++i) {
        var value = opaqueGetByValOnInt32ArrayEarlyOutOfBounds(int32Array, i);
        if ((i < 10 && value !== i) || (i >= 10 && value !== undefined))
            throw "Failed opaqueGetByValOnInt32ArrayEarlyOutOfBounds(int32Array, i) warmup with i = " + i + " value = " + value;
    }

    
    for (var i = 0; i < 1e4; ++i) {
        for (var j = 0; j < 10; ++j) {
            var value = opaqueGetByValOnInt32ArrayEarlyOutOfBounds(int32Array, j);
            if (j < 10 && value !== j)
                throw "Failed opaqueGetByValOnInt32ArrayEarlyOutOfBounds(int32Array, j) in-bounds with j = " + j + " value = " + value;
        }
    }

    
    for (var i = 0; i < 1e4; ++i) {
        for (var j = 0; j <= 10; ++j) {
            var value = opaqueGetByValOnInt32ArrayEarlyOutOfBounds(int32Array, j);
            if ((j < 10 && value !== j) || (j >= 10 && value !== undefined))
                throw "Failed opaqueGetByValOnInt32ArrayEarlyOutOfBounds(int32Array, j) out-of-bounds with j = " + j + " value = " + value;
        }
    }
}
testInt32ArrayEarlyOutOfBounds();


function testIndexingTypeChangesOnInt32Array()
{
    var doubleArray = [-0, 5.5, -42.1];
    var value = opaqueGetByValOnInt32ArrayEarlyOutOfBounds(doubleArray, 0);
    if (value || 1 / value !== -Infinity)
        throw "Failed opaqueGetByValOnInt32ArrayEarlyOutOfBounds(doubleArray, 0)";
    var value = opaqueGetByValOnInt32ArrayEarlyOutOfBounds(doubleArray, 1);
    if (value !== 5.5)
        throw "Failed opaqueGetByValOnInt32ArrayEarlyOutOfBounds(doubleArray, 1)";
    var value = opaqueGetByValOnInt32ArrayEarlyOutOfBounds(doubleArray, 2);
    if (value !== -42.1)
        throw "Failed opaqueGetByValOnInt32ArrayEarlyOutOfBounds(doubleArray, 2)";
}
testIndexingTypeChangesOnInt32Array();




function opaqueGetByValOnStringArrayHotOutOfBounds(array, index)
{
    return array[index];
}
noInline(opaqueGetByValOnStringArrayHotOutOfBounds);

function testStringArrayHotOutOfBounds()
{
    
    var stringArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < 1e2; ++i) {
        for (var j = 0; j < 10; ++j) {
            var value = opaqueGetByValOnStringArrayHotOutOfBounds(stringArray, j);
            if (value !== "" + j)
                throw "Failed opaqueGetByValOnStringArrayHotOutOfBounds(stringArray, j) in-bounds with j = " + j + " value = " + value;
        }
    }

    
    var value = opaqueGetByValOnStringArrayHotOutOfBounds(stringArray, 10);
    if (value !== undefined)
        throw "Failed opaqueGetByValOnStringArrayHotOutOfBounds(stringArray, 10) with i = " + i + " value = " + value;

    
    for (var i = 0; i < 1e3; ++i) {
        for (var j = 0; j < 10; ++j) {
            var value = opaqueGetByValOnStringArrayHotOutOfBounds(stringArray, j);
            if (value !== "" + j)
                throw "Failed opaqueGetByValOnStringArrayHotOutOfBounds(stringArray, j) in-bounds with j = " + j + " value = " + value;
        }
    }

    
    for (var i = 0; i < 1e3; ++i) {
        for (var j = 0; j <= 10; ++j) {
            var value = opaqueGetByValOnStringArrayHotOutOfBounds(stringArray, j);
            if ((j < 10 && value !== "" + j) || (j >= 10 && value !== undefined))
                throw "Failed opaqueGetByValOnStringArrayHotOutOfBounds(stringArray, j) out-of-bounds with j = " + j + " value = " + value;
        }
    }
}
testStringArrayHotOutOfBounds();

function testIndexingTypeChangesOnStringArray()
{
    var doubleArray = [-0, 5.5, -42.1];
    var value = opaqueGetByValOnStringArrayHotOutOfBounds(doubleArray, 0);
    if (value || 1 / value !== -Infinity)
        throw "Failed opaqueGetByValOnStringArrayHotOutOfBounds(doubleArray, 0)";
    var value = opaqueGetByValOnStringArrayHotOutOfBounds(doubleArray, 1);
    if (value !== 5.5)
        throw "Failed opaqueGetByValOnStringArrayHotOutOfBounds(doubleArray, 1)";
    var value = opaqueGetByValOnStringArrayHotOutOfBounds(doubleArray, 2);
    if (value !== -42.1)
        throw "Failed opaqueGetByValOnStringArrayHotOutOfBounds(doubleArray, 2)";
}
testIndexingTypeChangesOnStringArray();




function opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(array, index)
{
    return array[index];
}
noInline(opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds);

function testStringAndInt32ArrayHotOutOfBounds()
{
    
    var stringArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < 1e2; ++i) {
        for (var j = 0; j < 10; ++j) {
            var value = opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(stringArray, j);
            if (value !== "" + j)
                throw "Failed opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(stringArray, j) in-bounds with j = " + j + " value = " + value;
        }
    }

    
    var int32Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var value = opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(int32Array, 10);
    if (value !== undefined)
        throw "Failed opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(stringArray, 10) with i = " + i + " value = " + value;

    
    for (var i = 0; i < 1e3; ++i) {
        for (var j = 0; j < 10; ++j) {
            var value = opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(stringArray, j);
            if (value !== "" + j)
                throw "Failed opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(stringArray, j) in-bounds with j = " + j + " value = " + value;

            var value = opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(int32Array, j);
            if (value !== j)
                throw "Failed opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(int32Array, j) in-bounds with j = " + j + " value = " + value;
        }
    }

    
    for (var i = 0; i < 1e3; ++i) {
        for (var j = 0; j <= 10; ++j) {
            var value = opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(int32Array, j);
            if ((j < 10 && value !== j) || (j >= 10 && value !== undefined))
                throw "Failed opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(int32Array, j) out-of-bounds with j = " + j + " value = " + value;

            var value = opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(stringArray, j);
            if ((j < 10 && value !== "" + j) || (j >= 10 && value !== undefined))
                throw "Failed opaqueGetByValOnStringAndInt32ArrayHotOutOfBounds(stringArray, j) out-of-bounds with j = " + j + " value = " + value;
        }
    }
}
testStringAndInt32ArrayHotOutOfBounds();



function opaqueGetByValOnDoubleArrayHotOutOfBounds(array, index)
{
    return array[index];
}
noInline(opaqueGetByValOnDoubleArrayHotOutOfBounds);

function testStringArrayHotOutOfBounds()
{
    
    var doubleArray = new Array(10);
    for (var i = 0; i < 10; ++i) {
        if (i !== 5)
            doubleArray[i] = i + 0.5;
    }
    for (var i = 0; i < 1e2; ++i) {
        for (var j = 0; j < 10; ++j) {
            if (j !== 5) {
                var value = opaqueGetByValOnDoubleArrayHotOutOfBounds(doubleArray, j);
                if (value !== j + 0.5)
                    throw "Failed opaqueGetByValOnDoubleArrayHotOutOfBounds(doubleArray, j) in-bounds with j = " + j + " value = " + value;
            }
        }
    }

    
    var value = opaqueGetByValOnDoubleArrayHotOutOfBounds(doubleArray, 5);
    if (value !== undefined)
        throw "Failed opaqueGetByValOnDoubleArrayHotOutOfBounds(doubleArray, 5) with i = " + i + " value = " + value;

    
    for (var i = 0; i < 1e3; ++i) {
        for (var j = 0; j < 10; ++j) {
            if (j !== 5) {
                var value = opaqueGetByValOnDoubleArrayHotOutOfBounds(doubleArray, j);
                if (value !== j + 0.5)
                    throw "Failed opaqueGetByValOnDoubleArrayHotOutOfBounds(doubleArray, j) in-bounds with j = " + j + " value = " + value;
            }
        }
    }

    
    for (var i = 0; i < 1e3; ++i) {
        for (var j = 0; j < 10; ++j) {
            var value = opaqueGetByValOnDoubleArrayHotOutOfBounds(doubleArray, j);
            if ((j !== 5 && value !== j + 0.5) || (j === 10 && value !== undefined))
                throw "Failed opaqueGetByValOnDoubleArrayHotOutOfBounds(doubleArray, j) out-of-bounds with j = " + j + " value = " + value;
        }
    }
}
testStringArrayHotOutOfBounds();