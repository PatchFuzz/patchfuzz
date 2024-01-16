






var datestring = "Sat, 12 Aug 1995 13:30:00GMT";
WScript.Echo(Date.parse(datestring));




datestring = "Sat, 12 Aug 1995 13:30:00 ( GMT )";

WScript.Echo(Date.parse(datestring));



datestring = "Sat, 12 Aug 1995 13:30:00NX-01";

var actualResult = Date.parse(datestring);
WScript.Echo(actualResult);



datestring = "Sat, 12 Aug 1995 13:00:00 z";
WScript.Echo(Date.parse(datestring));



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
            WScript.Echo(Date.parse(obj));
        }
        catch (ex)
        {
            WScript.Echo("Got error:");
            WScript.Echo("    name:     " + ex.name);
            WScript.Echo("    message:  " + ex.message);
        }
        WScript.Echo("toString called:  " + (toStringCalled ? "yes" : "no"));
        WScript.Echo("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
    }
}




WScript.Echo(Date.parse("2011-11-08T19:48:43"));


WScript.Echo(Date.parse("2011-11-08T19:48:43.Z"));


WScript.Echo(Date.parse("2011-11-08T19:48:43.1"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.1a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.0"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.0a"));


WScript.Echo(Date.parse("2011-11-08T19:48:43.12"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.12a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.01"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.01a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.00"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.00a"));


WScript.Echo(Date.parse("2011-11-08T19:48:43.123"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.123a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.001"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.001a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.000"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.000a"));


WScript.Echo(Date.parse("2011-11-08T19:48:43.1234"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.1234a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.0011"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.0011a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.0001"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.0001a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.0000"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.0000a"));

WScript.Echo(Date.parse("2011-11-08T19:48:43.12345"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.12345a"))
WScript.Echo(Date.parse("2011-11-08T19:48:43.00111"));;
WScript.Echo(Date.parse("2011-11-08T19:48:43.00111a"));;
WScript.Echo(Date.parse("2011-11-08T19:48:43.00001"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.00001a"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.00000"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.00000a"));

WScript.Echo(Date.parse("2011-11-08T19:48:43.00000000000001"));
WScript.Echo(Date.parse("2011-11-08T19:48:43.00000000000001a"));




WScript.Echo(Date.parse("2011-11-08/19:48:43"));
WScript.Echo(Date.parse("2011-11-08:19:48:43"));
WScript.Echo(Date.parse("2011-11-08 19:48:43"));
WScript.Echo(Date.parse("2011-11-08/: 19:48:43"));

WScript.Echo(Date.parse("2011/11/08/19:48:43"));
WScript.Echo(Date.parse("2011/11/08:19:48:43"));
WScript.Echo(Date.parse("2011/11/08 19:48:43"));
WScript.Echo(Date.parse("2011/11/08/: 19:48:43"));


WScript.Echo(Date.parse("2011-11/08 19:48:43"));
WScript.Echo(Date.parse("2011/11-08 19:48:43"));


WScript.Echo(Date.parse("2011-11-08TT19:48:43"));



datestring = "13/01/2000";
WScript.Echo(Date.parse(datestring));

datestring = "2000-13-01";
WScript.Echo(Date.parse(datestring));



datestring = "01/40/2000";
WScript.Echo(Date.parse(datestring));

datestring = "2000-01-40";
WScript.Echo(Date.parse(datestring));
