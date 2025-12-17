var myobj = { a: "apple", 101: 1 }

print(testFunction, 50);



function testFunction()
{
    print(`myobj.propertyIsEnumerable('a'): ${myobj.propertyIsEnumerable('a')}`, true);
    print(`myobj.propertyIsEnumerable(101): ${myobj.propertyIsEnumerable(101)}`, true);
    print(`myobj.propertyIsEnumerable("101"): ${myobj.propertyIsEnumerable("101")}`, true);
    print(`myobj.propertyIsEnumerable("10"): ${myobj.propertyIsEnumerable("10")}`, true);

    for (o in myobj)
    {
        print(`${o} is enumerable ${myobj.propertyIsEnumerable(o)}`, true);
    }

    emitTTDLog(ttdLogURI);
}