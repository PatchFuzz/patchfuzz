function printObj(obj)
{
    print(obj.toString());
    for (var i in obj)
    {
        print(i + " == " + obj[i]);
    };
    print("byteLength = " + obj.byteLength);
}

function verifyThrow(func, obj)
{
    var hasThrown = false;
    var result;
    try {
        result = func(obj);
    }
    catch(e)
    {
        print("SUCCEEDED: get expected exception " + e.message);
        hasThrown = true;
    }
    if (!hasThrown)
    {
        print("FAILED: didn't get exception");
    }
}


function print(obj)
{
    WScript? print(obj) : document.write(obj);
}


function verifyNoThrow(func, obj)
{
    var hasThrown = false;
    var result;
    try {
        result = func(obj);
    }
    catch(e)
    {
        print("FAILED: get exception " + e.message);
        hasThrown = true;
    }
    return result;
}

function setIntValue(typedArray, valueToSet) {
}

function setFloat32Value(typedArray, valueToSet){
}

function setFloat64Value(typedArray){
}

function testSetWithObj(startIndex, endIndex, typedArray, typedArrayForFloatIndex, typedArrayForStringIndex)
{
    var count = 0;
    valueToSet = { valueOf: function() { print(count); return count++; } }

    for (var i = startIndex; i < endIndex; i++)
    {
        typedArray[-0] = valueToSet;
        typedArray[i] = valueToSet;
        typedArrayForFloatIndex[i + 0.892834] = valueToSet;
        typedArrayForStringIndex[i + "s"] = valueToSet;
    }
    for (var i = startIndex; i < endIndex; i++)
    {
        print(typedArray[i]);
        print(typedArrayForFloatIndex[i + 0.892834]);
        print(typedArrayForStringIndex[i + "s"]);
    }
    print(typedArray[-0]);
}

function testSetWithFloat(startIndex, endIndex, typedArray, typedArrayForFloatIndex, typedArrayForStringIndex)
{
    var count = 0;

    for (var i = startIndex; i < endIndex; i++)
    {
        typedArray[-0] = Math.sqrt(i);
        typedArray[i] = Math.sqrt(i);
        typedArrayForFloatIndex[i + 0.892834] = Math.sqrt(i);
        typedArrayForStringIndex[i + "s"] = Math.sqrt(i);
    }
    for (var i = startIndex; i < endIndex; i++)
    {
        print(typedArray[i]);
        print(typedArrayForFloatIndex[i + 0.892834]);
        print(typedArrayForStringIndex[i + "s"]);
    }
    print(typedArray[-0]);
}

function testSetWithInt(startIndex, endIndex, typedArray, typedArrayForFloatIndex, typedArrayForStringIndex)
{
    var count = 0;

    for (var i = startIndex; i < endIndex; i++)
    {
        typedArray[-0] = 5;
        typedArray[i] = 5;
        typedArrayForFloatIndex[i + 0.892834] = 5;
        typedArrayForStringIndex[i + "s"] = 5;
    }
    for (var i = startIndex; i < endIndex; i++)
    {
        print(typedArray[i]);
        print(typedArrayForFloatIndex[i + 0.892834]);
        print(typedArrayForStringIndex[i + "s"]);
    }
    print(typedArray[-0]);
}

function testIndexValueForSet(typedArray) {
    var count = 5;
    var obj = { valueOf: function() { print(count++); return count; } }
    var testIndices  = [
        0,
        "0",
        -0,    
        "-0",
        -2,
        "-2",
        1073741823,
        "1073741823",
        1,
        "1",
        2147483648 ,
        "2147483648" ,
        2147483647 ,
        "2147483647"  ,
        4294967296 ,
        "4294967296" ,
        4294967295 ,
        "4294967295" ,
        1.5,
        "1.5",
        "a", 
        1.0000000000000000000000000e+9,
        "1.0000000000000000000000000e-9",
        1/"a", 
        1/0,
        -1/0,
        (1/0).toString(),
        (-1/0).toString()
            ];

    for(var i = 0; i < testIndices.length; i++)
    {
        var testIndex = testIndices[i];
        if(typeof testIndex === "string")
        {
            print('***testing index ' + i + ' : "' + testIndex + '"');
        }
        else
        {
            print('***testing index ' + i + ' : ' + testIndex );
        }
        typedArray[testIndex] = obj;
        print(typedArray[testIndex]);
    }
}
