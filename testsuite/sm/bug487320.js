


function outer(x) {
    return (function foo() {
                this.bar = foo;
                return x;
            })();
}
print(outer(42));
print(bar());           
