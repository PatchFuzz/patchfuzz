



function foo(f) { f(); }

foo(function arguments() {
    function skippable() { }
});
