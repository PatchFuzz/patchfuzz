var PI = Math.PI;
var c = Math.ceil(PI);
var f = Math.floor(PI);

print(c, f);

(function f()
{
    
    

    var save;
    var O = { foo : function() { return "O.foo"; }, bar : function() { return "O.bar"; } };
    O.o = { foo : function() { return "O.o.foo"; }, bar : function() { return "O.o.bar"; } };

    print(O.foo(save = O, O = O.o));
    print(O.foo(O = save));

    var str = 'foo';
    print(O[str](O = O.o, str = 'bar'));
    print(O[str](O = save, str = 'foo'));

})();
