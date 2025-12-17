var obj = new Object();
obj.n = null;
obj.blah = 1;
obj[0] = null;
obj[1] = 1;

var n = null;
var blah = 1;


function CallErrorTest0()
{
    blah();
}


function CallErrorTest1()
{
    new blah();
}


function CallErrorTest2()
{
    obj.blah();
}


function CallErrorTest3()
{
    new obj.blah();
}


function CallErrorTest4()
{
    null();
}


function CallErrorTest5()
{
    new null();
}


function CallErrorTest6()
{
    1();
}


function CallErrorTest7()
{
    new 1();
}


function CallErrorTest8()
{
    function func(f)
    {
        f();
    }

    func(1);
}


function CallErrorTest9()
{
    obj[0]();
}


function CallErrorTest10()
{
    new obj[0]();
}


function CallErrorTest11()
{
    obj[1]();
}


function CallErrorTest12()
{
    new obj[1]();
}


function CallErrorTest13()
{
    n[1]();
}


function CallErrorTest14()
{
    new n[1]();
}


function CallErrorTest15()
{
    n.prop();
}


function CallErrorTest16()
{
    new n.prop();
}


function CallErrorTest17()
{
    obj.n();
}


function CallErrorTest18()
{
    new obj.n();
}


function CallErrorTest17()
{
    n();
}


function CallErrorTest18()
{
    new n();
}

var i = 0;
while (this["CallErrorTest" + i] != undefined)
{
    safeCall(this["CallErrorTest" + i]);
    i++;
}

writeLine("");
writeLine("");





var testCase_implicitGlobal = "implicit global";
var testCase_globalUsingWindow = "global using window";
var testCase_globalUsingThis = "global using this";
var testCase_local = "local";
var testCase_object = "object";
var testCase_arrayInitialized = "array initialized";
var testCase_arrayAssigned = "array assigned";
var testCases =
[
    testCase_implicitGlobal,
    testCase_globalUsingWindow,
    testCase_globalUsingThis,
    testCase_local,
    testCase_object,
    testCase_arrayInitialized,
    testCase_arrayAssigned
];

var testValue_uninitialized = null; 
var testValue_undefined = "undefined";
var testValue_null = "null";
var testValue_number = "1";
var testValue_object = "{}";
var testValues =
[
    testValue_uninitialized,
    testValue_undefined,
    testValue_null,
    testValue_number,
    testValue_object
];

var globalIndex = 0;
function generateAndRunTests(testCase, doDelete)
{
    if (testCase === testCase_local && doDelete)
        return; 

    writeLine("--- Test case: " + testCase + ", do delete: " + doDelete + " ---");
    writeLine("");

    for (var testValueIndex in testValues)
    {
        var testValue = testValues[testValueIndex];

        
        
        
        
        
        
        
        
        

        var globalIdentifier;
        switch (testCase)
        {
            case testCase_implicitGlobal:
                globalIdentifier = "g" + globalIndex++;
                break;
            case testCase_globalUsingWindow:
                globalIdentifier = "window.g" + globalIndex++;
                break;
            case testCase_globalUsingThis:
                globalIdentifier = "this.g" + globalIndex++;
                break;
        }

        var f = "safeCall(function(){";
        switch (testCase)
        {
            case testCase_implicitGlobal:
            case testCase_globalUsingWindow:
            case testCase_globalUsingThis:
                if (!testValue && doDelete)
                    continue; 
                if (testCase === testCase_globalUsingWindow)
                    writeLine("Only valid in IE:"); 
                if (testCase === testCase_globalUsingThis && (!testValue || doDelete))
                    writeLine("INCORRECT in JC all versions:"); 
                if (testValue)
                    f += globalIdentifier + "=" + testValue + ";";
                if (doDelete)
                    f += "delete " + globalIdentifier + ";";
                f += globalIdentifier + "();";
                break;

            case testCase_local:
                f += "var v";
                if (testValue)
                    f += "=" + testValue;
                f += ";v();";
                break;

            case testCase_object:
                if (!testValue && doDelete)
                    continue; 
                f += "var o={";
                if (testValue)
                    f += "p:" + testValue;
                f += "};"
                if (doDelete)
                    f += "delete o.p;";
                f += "o.p();";
                break;

            case testCase_arrayInitialized:
                if (!testValue && doDelete)
                    continue; 
                if (testValue === testValue_undefined && !doDelete)
                    writeLine("INCORRECT in compat modes:"); 
                f += "var a=[";
                if (testValue)
                    f += testValue;
                f += "];"
                if (doDelete)
                    f += "delete a[0];";
                f += "a[0]();";
                break;

            case testCase_arrayAssigned:
                if (!testValue && doDelete)
                    continue; 
                f += "var a=[];";
                if (testValue)
                    f += "a[0]=" + testValue + ";";
                if (doDelete)
                    f += "delete a[0];";
                f += "a[0]();";
                break;

            default:
                writeLine("Unknown test case '" + testCase + "'.");
                return;
        }
        f += "});";

        writeLine(f);
        eval(f);
        writeLine("");
    }

    writeLine("");
}

var booleans = [false, true];
for (var testCaseIndex in testCases)
{
    var testCase = testCases[testCaseIndex];
    for (var doDeleteIndex in booleans)
    {
        var doDelete = booleans[doDeleteIndex];
        generateAndRunTests(testCase, doDelete);
    }
}




function writeLine(str)
{
    print("" + str);
}

function safeCall(func)
{
    try
    {
        return func();
    }
    catch (ex)
    {
        writeLine(ex.name + " (" + ex.number + "): " + ex.message);
    }
}
