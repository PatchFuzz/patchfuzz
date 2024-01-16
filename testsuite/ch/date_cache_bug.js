




WScript.Echo("Checking for new Date() with DST issues: ");
WScript.Echo("Backward loop starts");
for (var working = new Date(2014, 2, 1) ; working.getFullYear() > 1940;)
{
    var dayOfMonth = working.getDate();
    var nextYear = working.getFullYear();
    var nextMonth = working.getMonth();
    dayOfMonth -= 1;

    working = new Date(nextYear, nextMonth, dayOfMonth);
    if (working.getHours() > 0)
    {
        WScript.Echo("" + working + "  from:" + nextYear + "," + nextMonth + "," + dayOfMonth + "");

        dayOfMonth--;
        working = new Date(nextYear, nextMonth, dayOfMonth); 
    }
}

WScript.Echo("Forwards loop starts");
for (var working = new Date(1940, 0, 0) ; working.getFullYear() < 2014;)
{
    var dayOfMonth = working.getDate();
    var nextYear = working.getFullYear();
    var nextMonth = working.getMonth();
    dayOfMonth += 1;

    working = new Date(nextYear, nextMonth, dayOfMonth);

    if (working.getHours() > 0)
    {
        WScript.Echo("" + working + "  from:" + nextYear + "," + nextMonth + "," + dayOfMonth + "");

        dayOfMonth++;
        working = new Date(nextYear, nextMonth, dayOfMonth); 
    }
}

WScript.Echo("done.");
