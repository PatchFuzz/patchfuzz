var datestring = "Sat, 12 Aug 1995 13:30:00GMT";
print(Date.parse(datestring));




datestring = "Sat, 12 Aug 1995 13:30:00 ( GMT )";

print(Date.parse(datestring));



datestring = "Sat, 12 Aug 1995 13:30:00NX-01";

var actualResult = Date.parse(datestring);
print(actualResult);



datestring = "Sat, 12 Aug 1995 13:00:00 z";
print(Date.parse(datestring));



var toStrings;
var valueOfs;
var toStringCalled;
var valueOfCalled;

toStrings =
[
    {},
    function ()
    {
        toStringCalled = true;
        return {};
    },
    function ()
    {
        toStringCalled = true;
        return undefined;
    },
    function ()
    {
        toStringCalled = true;
        return "1/1/1970 12:00 am";
    }
];

valueOfs =
[
    {},
    function ()
    {
        valueOfCalled = true;
        return {};
    },
    function ()
    {
        valueOfCalled = true;
        return undefined;
    },
    function ()
    {
        valueOfCalled = true;
        return "1/1/1970 1:00 am";
    },
    function ()
    {
        valueOfCalled = true;
        return "84";
    }
];

for (var ts in toStrings)
{
    for (var vo in valueOfs)
    {
        toStringCalled = false;
        valueOfCalled = false;

        var obj = { toString: toStrings[ts], valueOf: valueOfs[vo] };

        try
        {
            print(Date.parse(obj));
        }
        catch (ex)
        {
            print("Got error:");
            print("    name:     " + ex.name);
            print("    message:  " + ex.message);
        }
        print("toString called:  " + (toStringCalled ? "yes" : "no"));
        print("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
    }
}




print(Date.parse("2011-11-08T19:48:43"));


print(Date.parse("2011-11-08T19:48:43.Z"));


print(Date.parse("2011-11-08T19:48:43.1"));
print(Date.parse("2011-11-08T19:48:43.1a"));
print(Date.parse("2011-11-08T19:48:43.0"));
print(Date.parse("2011-11-08T19:48:43.0a"));


print(Date.parse("2011-11-08T19:48:43.12"));
print(Date.parse("2011-11-08T19:48:43.12a"));
print(Date.parse("2011-11-08T19:48:43.01"));
print(Date.parse("2011-11-08T19:48:43.01a"));
print(Date.parse("2011-11-08T19:48:43.00"));
print(Date.parse("2011-11-08T19:48:43.00a"));


print(Date.parse("2011-11-08T19:48:43.123"));
print(Date.parse("2011-11-08T19:48:43.123a"));
print(Date.parse("2011-11-08T19:48:43.001"));
print(Date.parse("2011-11-08T19:48:43.001a"));
print(Date.parse("2011-11-08T19:48:43.000"));
print(Date.parse("2011-11-08T19:48:43.000a"));


print(Date.parse("2011-11-08T19:48:43.1234"));
print(Date.parse("2011-11-08T19:48:43.1234a"));
print(Date.parse("2011-11-08T19:48:43.0011"));
print(Date.parse("2011-11-08T19:48:43.0011a"));
print(Date.parse("2011-11-08T19:48:43.0001"));
print(Date.parse("2011-11-08T19:48:43.0001a"));
print(Date.parse("2011-11-08T19:48:43.0000"));
print(Date.parse("2011-11-08T19:48:43.0000a"));

print(Date.parse("2011-11-08T19:48:43.12345"));
print(Date.parse("2011-11-08T19:48:43.12345a"))
print(Date.parse("2011-11-08T19:48:43.00111"));;
print(Date.parse("2011-11-08T19:48:43.00111a"));;
print(Date.parse("2011-11-08T19:48:43.00001"));
print(Date.parse("2011-11-08T19:48:43.00001a"));
print(Date.parse("2011-11-08T19:48:43.00000"));
print(Date.parse("2011-11-08T19:48:43.00000a"));

print(Date.parse("2011-11-08T19:48:43.00000000000001"));
print(Date.parse("2011-11-08T19:48:43.00000000000001a"));




print(Date.parse("2011-11-08/19:48:43"));
print(Date.parse("2011-11-08:19:48:43"));
print(Date.parse("2011-11-08 19:48:43"));
print(Date.parse("2011-11-08/: 19:48:43"));

print(Date.parse("2011/11/08/19:48:43"));
print(Date.parse("2011/11/08:19:48:43"));
print(Date.parse("2011/11/08 19:48:43"));
print(Date.parse("2011/11/08/: 19:48:43"));


print(Date.parse("2011-11/08 19:48:43"));
print(Date.parse("2011/11-08 19:48:43"));


print(Date.parse("2011-11-08TT19:48:43"));



datestring = "13/01/2000";
print(Date.parse(datestring));

datestring = "2000-13-01";
print(Date.parse(datestring));



datestring = "01/40/2000";
print(Date.parse(datestring));

datestring = "2000-01-40";
print(Date.parse(datestring));
