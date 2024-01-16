




var total = 0, accepted = 0, failed = 0;
echo("
echo("
echo("");

echo("
echo("");
runTest("0001-00-01T01:01:01.001Z");
runTest("0001-13-01T01:01:01.001Z");
runTest("0001-01-00T01:01:01.001Z");
runTest("0001-01-32T01:01:01.001Z");
runTest("0001-01-01T25:01:01.001Z");
runTest("0001-01-01T01:01:01.001+25:00");
runTest("0001-01-01T01:60:01.001Z");
runTest("0001-01-01T01:01:01.001+00:60");
runTest("0001-01-01T01:01:60.001Z");

echo("
echo("");
runTest("-300000-01-01T01:01:01.001Z");
runTest("+300000-01-01T01:01:01.001Z");



writeStats();

echo("
echo("
echo("");

echo("
echo("");
var s = "0001-01-01T01:01:01.001Z";
var spaceNulls = ["", "\0", "\t", "\n", "\v", "\f", "\r", " ", "\u00a0", "\u2028", "\u2029", "\ufeff"];
for (var i = 0; i < spaceNulls.length; ++i) {
    if (s !== "") {
        runTest(spaceNulls[i] + s);
        runTest(s + spaceNulls[i]);
    }
    runTest(s + spaceNulls[i] + "x");
}

echo("
echo("");
runTest("001-01-01T01:01:01.001Z");
runTest("00001-01-01T01:01:01.001Z");
runTest("0001-1-01T01:01:01.001Z");
runTest("0001-001-01T01:01:01.001Z");
runTest("0001-01-1T01:01:01.001Z");
runTest("0001-01-001T01:01:01.001Z");
runTest("0001-01-01T1:01:01.001Z");
runTest("0001-01-01T001:01:01.001Z");
runTest("0001-01-01T01:1:01.001Z");
runTest("0001-01-01T01:001:01.001Z");
runTest("0001-01-01T01:01:1.001Z");
runTest("0001-01-01T01:01:001.001Z");
runTest("0001-01-01T01:01:01.01Z");
runTest("0001-01-01T01:01:01.0001Z");

echo("
echo("");
runTest("0001Z");
runTest("0001-01Z");
runTest("0001-01-01Z"); 

echo("
echo("");
runTest("0001-01-01T01Z");
runTest("0001-01-01T01:01:01.001+01");

echo("
echo("");
runTest("T01:01Z");
runTest("T01:01:01Z");
runTest("T01:01:01.001Z");

echo("
echo("");
runTest("0001-");
runTest("0001-01-");
runTest("0001-T01:01:01.001Z");
runTest("0001-01-T01:01:01.001Z");
runTest("0001-01-01T01:01:Z");
runTest("0001-01-01T01:01:01.Z");

echo("
echo("");
runTest("+0001-01-01T01:01:01.001Z");
runTest("-0001-01-01T01:01:01.001Z");
runTest("010000-01-01T01:01:01.001Z");
runTest("-000000-01-01T01:01:01.001Z");

echo("
echo("");
runTest("2012-02-22T03:08:26+0000");

echo("
echo("");
runTest("Wed Jul 22 16:04:54 2016 +0000");
runTest("Wed Jul 22 16:04:54 +0000 2016");
runTest("Wed Jul 22 +0000 16:04:54 2016");
runTest("Wed Jul +0000 22 16:04:54 2016");
runTest("Wed +0000 Jul 22 16:04:54 2016");
runTest("+0000 Wed Jul 22 16:04:54 2016");
runTest("Wed Jul 22 16:04:54 2016");

writeStats();



function runTest(s) {
    ++total;
    echo(s);
    safeCall(function () {
        var iso = new Date(s);
        var timeValue1 = iso.getTime();
        if (isNaN(timeValue1)) {
            echo(iso);
        } else {
            iso = iso.toISOString();
            echo(iso);
            var timeValue2 = new Date(iso).getTime();
            echo(timeValue1 + " " + (timeValue1 === timeValue2 ? "===" : "!==") + " " + timeValue2);
            if (iso.indexOf("Invalid", 0) === -1) {
                if (timeValue1 === timeValue2)
                    ++accepted;
                else
                    ++failed;
            }
        }
    });
    echo("");
}

function writeStats() {
    echo("Total: " + total);
    echo("Accepted: " + accepted);
    echo("Rejected: " + (total - accepted - failed));
    echo("Failed: " + failed);
    echo("");
    failed = accepted = total = 0;
}




function toString(o, quoteStrings) {
    switch (o) {
        case null:
        case undefined:
            return "" + o;
    }

    switch (typeof o) {
        case "boolean":
        case "number":
            return "" + o;

        case "string":
            {
                var hex = "0123456789abcdef";
                var s = "";
                for (var i = 0; i < o.length; ++i) {
                    var c = o.charCodeAt(i);
                    if (c === 0)
                        s += "\\0";
                    else if (c >= 0x20 && c < 0x7f)
                        s += quoteStrings && o.charAt(i) === "\"" ? "\\\"" : o.charAt(i);
                    else if (c <= 0xff)
                        s += "\\x" + hex.charAt((c >> 4) & 0xf) + hex.charAt(c & 0xf);
                    else
                        s += "\\u" + hex.charAt((c >> 12) & 0xf) + hex.charAt((c >> 8) & 0xf) + hex.charAt((c >> 4) & 0xf) + hex.charAt(c & 0xf);
                }
                if (quoteStrings)
                    s = "\"" + s + "\"";
                return s;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o + "'>";
    }

    if (o instanceof Array) {
        var s = "[";
        for (var i = 0; i < o.length; ++i) {
            if (i)
                s += ", ";

            s += this.toString(o[i], true);
        }
        return s + "]";
    }
    if (o instanceof Error)
        return o.name + ": " + o.message;
    if (o instanceof RegExp)
        return o.toString() + (o.lastIndex === 0 ? "" : " (lastIndex: " + o.lastIndex + ")");
    return "" + o;
}

function echo(o) {
    var s = this.toString(o);
    try {
        document.write(s + "<br/>");
    } catch (ex) {
        try {
            WScript.Echo(s);
        } catch (ex2) {
            print(s);
        }
    }
}

function safeCall(f) {
    var args = [];
    for (var a = 1; a < arguments.length; ++a)
        args.push(arguments[a]);
    try {
        return f.apply(this, args);
    } catch (ex) {
        echo(ex);
    }
}
