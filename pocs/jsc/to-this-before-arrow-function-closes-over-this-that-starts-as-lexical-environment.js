function print(b) {
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
            print(!("bar" in this));
            print(this === globalThis);
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
            print(this === globalThis);
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

print(this.hasOwnProperty("baz"));
print(this.hasOwnProperty("baz2"));
