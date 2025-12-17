function Ctor()
{
    this.a = 400;
}
function test()
{
    
    var simple = {};
    simple.blah = 1;

    var literal = { a: 3 };

    var obj = new Ctor();
    
    var arrintlit = [ 1, 2 ];
    var arrfloatlit = [ 1.1 ];

    
    var typedarr = new Uint8Array(1);
    typedarr[0] = 2;

    var arr = [];
    arr[0] = 1;

    return simple.blah + literal.a + arr[0] + arr.length + typedarr[0] + typedarr.length + arrintlit[0] + obj.a + arrfloatlit[0];
}

print(test());
print(test());
