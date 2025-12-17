var o1 = {},o2 = {};

o1.x = "A";
o1.y = "B";

o2.y = "C";
o2.x = "D";

print(testFunction, 50);



function testFunction()
{
    print(o1.x, true);
    print(o1.y, true);
    print(o2.x, true);
    print(o2.y, true);

    emitTTDLog(ttdLogURI);
}