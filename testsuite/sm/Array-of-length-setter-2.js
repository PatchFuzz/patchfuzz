


load(libdir + "asserts.js");

function Empty() {}
Empty.of = Array.of;
Object.defineProperty(Empty.prototype, "length", {get: () => 0});

var nothing = new Empty;
nothing.length = 2;  

assertThrowsInstanceOf(() => Empty.of(), TypeError);
