





if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

initializeGenerateDateStrings();
var yearDigits = 0, monthDigits = 0, dayDigits = 0, hourMinuteDigits = 0, secondDigits = 0, millisecondDigits = 0;
var tests = [{
    name: "Test if valid ISO date strings are parsed correctly",
    body: function () {
        for (yearDigits = 4; yearDigits <= 6; yearDigits += 2) {
            dayDigits = monthDigits = 0;
            runGenerateTestWithValidTime();
            monthDigits = 2;
            runGenerateTestWithValidTime();
            dayDigits = 2;
            runGenerateTestWithValidTime();
        }
    }
}];
function runGenerateTestWithValidTime() {
    millisecondDigits = secondDigits = hourMinuteDigits = 0;
    runGenerateTest();
    hourMinuteDigits = 2;
    runGenerateTest();
    secondDigits = 2;
    runGenerateTest();
    millisecondDigits = 3;
    runGenerateTest();
}

testRunner.run(tests, { verbose: WScript.Arguments[0] != "summary" });

function runTest(testString) {
    var dateObj = new Date(testString);
    var timeValue1;
    try {
        timeValue1 = dateObj.getTime();
    } catch (ex) {
        assert.fail("Unable to parse Date \"" + testString + "\". Error is " + ex.message);
    }
    assert.isFalse(isNaN(timeValue1), "Unable to parse Date \"" + testString + "\"");
    var ISOString = dateObj.toISOString();
    console.log(ISOString);
    var timeValue2;
    try {
        timeValue2 = new Date(ISOString).getTime();
    } catch (ex) {
        assert.fail("Unable to parse Date \"" + ISOString + "\". Error is " + ex.message);
    }
    assert.areEqual(timeValue1, timeValue2, "Date \"" + testString + "\" is not parsed correctly.");
}

function runGenerateTest() {
    var s =
        generateDateStrings(
            yearDigits,
            monthDigits,
            dayDigits,
            hourMinuteDigits,
            hourMinuteDigits,
            secondDigits,
            millisecondDigits);
    for (var i = 0; i < s.length; ++i)
        runTest(s[i]);
}

var signs, zones;
function initializeGenerateDateStrings() {
    signs = ["+", "-"];
    zones = ["", "Z"];
    var zoneDigitCombinations = ["00", "01", "10"];
    for (var i = 0; i < zoneDigitCombinations.length; ++i)
        for (var j = 0; j < zoneDigitCombinations.length; ++j)
            for (var k = 0; k < signs.length; ++k)
                zones.push(signs[k] + zoneDigitCombinations[i] + ":" + zoneDigitCombinations[j]);
}













function generateDateStrings(
    yearDigits,         
    monthDigits,        
    dayDigits,          
    hourDigits,         
    minuteDigits,       
    secondDigits,       
    millisecondDigits)  
{
    if (yearDigits === 0 && monthDigits !== 0 ||
        monthDigits === 0 && dayDigits !== 0 ||
        hourDigits === 0 && minuteDigits !== 0 ||
        minuteDigits === 0 && (hourDigits !== 0 || secondDigits !== 0) ||
        secondDigits === 0 && millisecondDigits !== 0 ||
        yearDigits === 0 && (hourDigits === 0 || minuteDigits === 0))
        return [];

    var s = [""];

    if (yearDigits !== 0) {
        appendDigits(s, yearDigits, true);
        if (monthDigits !== 0) {
            append(s, ["-"]);
            appendDigits(s, monthDigits, false);
            if (dayDigits !== 0) {
                append(s, ["-"]);
                appendDigits(s, dayDigits, false);
            }
        }
    }

    if (hourDigits !== 0 && minuteDigits !== 0) {
        append(s, ["T"]);
        appendDigits(s, hourDigits, true);
        append(s, [":"]);
        appendDigits(s, minuteDigits, true);
        if (secondDigits !== 0) {
            append(s, [":"]);
            appendDigits(s, secondDigits, true);
            if (millisecondDigits !== 0) {
                append(s, ["."]);
                appendDigits(s, millisecondDigits, true);
            }
        }
    }

    if (yearDigits !== 0 && hourDigits !== 0 && minuteDigits !== 0)
        s = applyToEach(s, zones, function (str, zone) { return str + zone; });
    if (yearDigits === 6) {
        s =
            applyToEach(
                s,
                signs,
                function (str, sign) {
                    if (sign === "-" && str.length >= 6 && str.substring(0, 6) === "000000")
                        return undefined; 
                    return sign + str;
                });
    }

    return s;
}


function appendDigits(a, n, includeZero) {
    var d = [];
    switch (n) {
        case 0:
            break;

        case 1:
            if (includeZero)
                d.push("0");
            d.push("1");
            append(a, d);
            break;

        case 3:
        case 6:
            if (n === 3)
                d.push("010");
            else
                d.push("010010");

        default:
            var z = zeroes(n - 1);
            if (includeZero)
                d.push(z + "0");
            d.push(z + "1");
            d.push("1" + z);
            append(a, d);
            break;
    }
}


function zeroes(n) {
    var s = "";
    while (n-- > 0)
        s += "0";
    return s;
}



function append(a, p) {
    extend(a, p.length);
    for (var i = 0; i < a.length; ++i)
        a[i] += p[i % p.length];
}




function applyToEach(a, p, f) {
    var a2 = [];
    for (var i = 0; i < a.length; ++i) {
        for (var j = 0; j < p.length; ++j) {
            var transformed = f(a[i], p[j]);
            if (transformed !== undefined)
                a2.push(transformed);
        }
    }
    return a2;
}


function extend(a, n) {
    var originalLength = a.length;
    for (var i = originalLength; i < n; ++i)
        a.push(a[originalLength - 1]);
}
