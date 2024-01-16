







function dummy() {
    
}

dummy();
var obj = {
    func: function () {
        dummy();
        throw 123;
        dummy();
    }
};
obj.func();
dummy();
