function bar() {}
noInline(bar);

function baz() { }

function foo() {
    if (typeof baz !== "undefined") {
    } else {
        
        
        
        while (true) bar();
    }
}
noInline(foo);
for (let i = 0; i < 10000; ++i)
    foo();
