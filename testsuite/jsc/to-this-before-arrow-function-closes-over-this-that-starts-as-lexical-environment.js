function assert(b) {
    if (!b)
        throw new Error("Bad assertion!")
}

function obj() { 
    return {};
}
noInline(obj);





const globalThis = this;
function foo() {
    function capture() { return wrapper; }
    function wrapper() {
        let x = () => {
            Object.defineProperty(this, "baz", {
                get: function() { },
                set: function() { }
            });
            assert(!("bar" in this));
            assert(this === globalThis);
        }

        x();
    }
    wrapper();
}
foo();


function foo2() {
    function capture() { return wrapper; }
    function wrapper() {
        let x = () => {
            Object.defineProperty(this, "baz2", {
                get: function() { },
                set: function() { }
            });
            assert(this === globalThis);
        }

        x();

        function bar() {
            with (obj()) {
                assert;
            }
        }
        bar();
    }
    wrapper();
}
foo2();

assert(this.hasOwnProperty("baz"));
assert(this.hasOwnProperty("baz2"));
