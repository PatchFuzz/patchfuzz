

function W() { test(); }
class Z extends W {}  
class Y extends Z {}  

class X extends Y {}  

function test() {
    for (let frame of new Error().stack.split('\n')) {
        function lineNumber(frame) {
            return +frame.match(/(\d+):\d+$/)[1];
        }

        if (frame.startsWith("Z@"))
            assertEq(lineNumber(frame), 4);
        if (frame.startsWith("Y@"))
            assertEq(lineNumber(frame), 5);
        if (frame.startsWith("X@"))
            assertEq(lineNumber(frame), 7);
    }
}

new X;
