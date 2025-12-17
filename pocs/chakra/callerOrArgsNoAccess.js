function test1() {
    function foo () {
        "use strict";
    }
    function bar () {
        function baz () {
            "use strict";
        }
    }
    try {
        foo.caller;  
        return false;
    }
    catch (e) {
        bar.caller;  
        return e instanceof TypeError;
    }
}

function test2() {
    function foo () {
        "use strict";
    }
    function bar () {
        function baz () {
            "use strict";
        }
    }
    try {
        foo.caller = 42;  
        return false;
    }
    catch (e) {
        bar.caller = 42;  
        return e instanceof TypeError;
    }
}

function test3() {
    function foo () {
        "use strict";
    }
    function bar () {
        function baz () {
            "use strict";
        }
    }
    try {
        foo.arguments;  
        return false;
    }
    catch (e) {
        bar.arguments;  
        return e instanceof TypeError;
    }
}

function test4() {
    function foo () {
        "use strict";
    }
    function bar () {
        function baz () {
            "use strict";
        }
    }
    try {
        foo.arguments = 42;  
        return false;
    }
    catch (e) {
        bar.arguments = 42;  
        return e instanceof TypeError;
    }
}


test1.caller;
test2.caller = 42;
test3.arguments;
test4.arguments = 42;


var echo = WScript.Echo;
echo(test1());
echo(test2());
echo(test3());
echo(test4());
