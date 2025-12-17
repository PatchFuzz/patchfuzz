function leaf() {
}
var obj0 = {};
obj0 = leaf();

function test0() {
    var count = 0;
    var litObj0 = { prop1: 0 };
    function func1() {
        litObj0.prop0 = 1;
    };
    Object.defineProperty(litObj0, 'prop0', {
        set: function () {
            count++;
            print(count);
        }
    });
    
    func1();
    func1();
}
test0();
test0();