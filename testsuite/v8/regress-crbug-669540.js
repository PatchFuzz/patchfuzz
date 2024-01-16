



function f({
    [
        (function g() {
            assertThrows(function(){
                print(eval("p"));
            }, ReferenceError);
        })()
    ]: p
}) {};

f({});
