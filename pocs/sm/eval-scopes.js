function bytecode(f) {
    if (typeof disassemble !== "function")
        return "unavailable";
    var d = disassemble(f);
    return d.slice(d.indexOf("main:"), d.indexOf("\n\n"));
}

function hasGname(f, v, hasIt = true) {
    
    
    try {
        var b = bytecode(f);
        if (b != "unavailable") {
            print(b.includes(`GetGName "${v}"`), hasIt);
            print(b.includes(`GetName "${v}"`), !hasIt);
        }
    } catch (e) {
        print(e.stack);
        throw e;
    }
}

var x = "outer";

{
    let x = "inner";
    eval("function h() { print(x, 'inner');} h()");
    eval("function h2() { (function nest() { print(x, 'inner'); })(); } h2()");
}


eval(`
     function h3() {
         print(x, 'outer');
     }
     h3();
     hasGname(h3, 'x', true);
     `);
eval(`
     function h4() {
         function nest() { print(x, 'outer'); }
         nest();
         return nest;
     }
     hasGname(h4(), 'x', true);
     `);

with ({}) {
    let x = "inner";
    eval("function j() { print(x, 'inner');} j()");
    eval("function j2() { (function nest() { print(x, 'inner'); })(); } j2()");
}

(function () {
    let x = "inner";
    eval("function l() { print(x, 'inner');} l()");
    eval("function l2() { (function nest() { print(x, 'inner'); })(); } l2()");
})();

var y1 = 5;
eval(`
     'use strict';
     var y1 = 6;
     print(y1, 6);
     (function() { print(y1, 6); })()
     `);
print(y1, 5);

eval(`
     'use strict';
     var y2 = 6;
     print(y2, 6);
     (function() { print(y2, 6); })()
     `);
