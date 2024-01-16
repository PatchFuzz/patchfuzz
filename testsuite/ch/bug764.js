




function write(v) { WScript.Echo(v + ""); }

var x = 10;

try {
    x();
    write("no exception");
} catch (e) {
    write(e.message);
}
