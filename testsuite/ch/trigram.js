





var s = "GGCCGGGTAAAGTGGCTCACGCCTGTAATCCCAGCACTTTACCCCCCGAGGCGGGCGGA";
writeLine(s.match(/[cgt]gggtaaa|tttaccc[acg]/ig));




var web;
function writeLine(s) {
    if (web)
        document.writeln(s + "<br/>");
    else
        WScript.Echo("" + s);
}

function safeCall(f) {
    try {
        f();
    }
    catch (ex) {
        writeLine(ex.name + ": " + ex.message);
    }
}
