function dummy() {
    
}

dummy();
var obj = {
    get foo() {    
        dummy();
        throw 123;
        dummy();
    }
};
obj.foo;
dummy();
