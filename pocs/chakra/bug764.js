function write(v) { print(v + ""); }

var x = 10;

try {
    x();
    write("no exception");
} catch (e) {
    write(e.message);
}
