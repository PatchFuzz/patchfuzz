function test1() {
    "some directive"+"";
    "use strict";

    with ({ }) { } 
}
test1();

function test2() {
    function deferred() {
        "some directive";
        "use strict";

        with ({ }) { } 
    }
    deferred();
}
test2();

print("FAILED"); 
