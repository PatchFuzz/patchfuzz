function test()
{
    var arr = [1];
    var desc = { get: function () { throw "str"; } };
    function foo(a, b) {
        a[0] += b;
    };
    foo(arr, 1);
    foo(arr, 2);  
    Object.defineProperty(arr, 1, desc);
    var nothrow = { get: function () { return "nothrowStr" } };
    Object.defineProperty(arr, 2, nothrow); 
    foo(arr, 3); 
    print("PASSED"); 
}
test.call({});