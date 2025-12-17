function foo() {
    'use strict';
    try {
        foo.caller;
    } catch (e) {
        return Array.of(arguments).join();
    }
    throw new Error();
}

function bar() {
'use strict';
    try {
        return foo();
    } finally {
    }
}

for (var i = 0; i < testLoopCount; ++i) {
    bar();
}
