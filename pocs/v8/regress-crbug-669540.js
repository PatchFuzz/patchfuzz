function f({
    [
        (function g() {
            print(function(){
                print(eval("p"));
            }, ReferenceError);
        })()
    ]: p
}) {};

f({});
