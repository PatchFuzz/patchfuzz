var x = 'global x';

function write(x) { print(x); }

(function() {
    try {
        inner();
    }
    catch(e) {
        write(e);
    }

    let x = 'local x';

    try {
        inner();
    }
    catch(e) {
        write(e);
    }

    function inner() {
        write(x);
    }
})();

(function() {
    while(1) {
        try {
            LABEL0:
            switch(x) {
            case 0:
                let x = 'local x';
                
            default:
                function inner() {
                    write(x);
                }
                inner();
                
                return;
            case 'seriously?':
                break LABEL0;
            }
        }
        catch(e) {
            write(e);
            
            x = 0;
        }
    }
})();

try {
    (function() {
        if (typeof a === 'string') {
            write('a is a string');
        }
        let a = 'let a';
    })();
} catch (e) {
    write(e);
}

try {
    (function() {
        let a = 'let a';
        if (typeof a === 'string') {
            write('a is a string');
        }
    })();
} catch (e) {
    write(e);
}

try {
    (function () {
        if (delete a) {
            write("deleted a");
        } else {
            write("did not delete a");
        }
        let a = 'let a';
    })();
} catch (e) {
    write(e);
}

try {
    (function () {
        let a = 'let a';
        if (delete a) {
            write("deleted a");
        } else {
            write("did not delete a");
        }
    })();
} catch (e) {
    write(e);
}

try {
    try {
        write(eval('typeof t'));
    }
    catch(e) {
        write(e);
    }

    (function() {
        write(eval('typeof t'));
    })();
}
catch(e) {
    write(e);
}

let t;
write(eval('typeof t'));

(function () {
    try {
        let foo = eval('foo();');
    } catch (e) {
        write(e);
    }

    try {
        const foo = eval('foo();');
    } catch (e) {
        write(e);
    }

    try {
        eval('foo();');
        let foo = 123;
    } catch (e) {
        write(e);
    }

    try {
        eval('foo();');
        const foo = 123;
    } catch (e) {
        write(e);
    }
})();

(function () {
    try {
        eval('let a = a;');
    } catch (e) {
        write(e);
    }

    try {
        eval('const a = a;');
    } catch (e) {
        write(e);
    }

    try {
        
        let a = a;
    } catch (e) {
        write(e);
    }

    try {
        
        const a = a;
    } catch (e) {
        write(e);
    }
})();

(function () {
    try {
        eval('a() = 123; let a;');
    } catch (e) {
        write(e);
    }

    try {
        eval('a() = 123; const a = undefined;');
    } catch (e) {
        write(e);
    }
})();

try {
    write(delete glo_a);
} catch (e) {
    write(e);
}

try {
    write(typeof glo_a);
} catch (e) {
    write(e);
}

let glo_a = 'glo_a';

try {
    write(delete glo_a);
} catch (e) {
    write(e);
}

try {
    write(typeof glo_a);
} catch (e) {
    write(e);
}

try {
    write(delete glo_b);
} catch (e) {
    write(e);
}

try {
    write(typeof glo_b);
} catch (e) {
    write(e);
}

const glo_b = 'glo_b';

try {
    write(delete glo_b);
} catch (e) {
    write(e);
}

try {
    write(typeof glo_b);
} catch (e) {
    write(e);
}


try {
    switch (Math.round(.2)) {
    case 3:
        let x = eval("");
    default:
        x; 
    }
} catch (e) {
    write(e);
}


function testStSlotNoThrow() { let y = function () { write(y = 123); }; write(y); y(); write(y); }
function testStSlotThrow() { let y = (function () { write(y = 123); })(); write(y); }

function testStObjSlotNoThrow() { let y = function () { write(y = 123); }; write(y); y(); write(y); eval('y'); }
function testStObjSlotThrow() { let y = (function () { write(y = 123); })(); write(y); eval('y'); }

function testTypeOfNoThrow() { let y = function () { write(typeof y); }; y(); }
function testTypeOfThrow() { let y = (function () { write(typeof y); })(); }

function testTypeOfObjNoThrow() { let y = function () { write(typeof y); }; y(); eval('y'); }
function testTypeOfObjThrow() { let y = (function () { write(typeof y); })(); eval('y'); }

function testLdSlotNoThrow() { let y = function () { write(y); }; y(); }
function testLdSlotThrow() { let y = (function () { write(y); })(); }

function testLdObjSlotNoThrow() { let y = function () { write(y); }; y(); eval('y'); }
function testLdObjSlotThrow() { let y = (function () { write(y); })(); eval('y'); }

try { testStSlotNoThrow(); } catch (e) { write("shouldn't throw! " + e); }
try { testStSlotThrow(); } catch (e) { write(e); }

try { testStObjSlotNoThrow(); } catch (e) { write("shouldn't throw! " + e); }
try { testStObjSlotThrow(); } catch (e) { write(e); }

try { testTypeOfNoThrow(); } catch (e) { write("shouldn't throw! " + e); }
try { testTypeOfThrow(); } catch (e) { write(e); }

try { testTypeOfObjNoThrow(); } catch (e) { write("shouldn't throw! " + e); }
try { testTypeOfObjThrow(); } catch (e) { write(e); }

try { testLdSlotNoThrow(); } catch (e) { write("shouldn't throw! " + e); }
try { testLdSlotThrow(); } catch (e) { write(e); }

try { testLdObjSlotNoThrow(); } catch (e) { write("shouldn't throw! " + e); }
try { testLdObjSlotThrow(); } catch (e) { write(e); }

function testBugVsoOs849056() {
    let x; 
    function inner() {
        y = x; 
        let y;
    }
    inner();
}

try { testBugVsoOs849056(); } catch (e) { write(e); }

function testBugVsoOs1141661() {
    y = 5;
    let y;
    eval("write('This should be unreachable');");
}

try { testBugVsoOs1141661(); } catch (e) { write(e); }

