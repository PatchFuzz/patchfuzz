var g = newGlobal();

var array = g.eval("new Array(1,2,3)");
print([array,array].concat().toString(), "1,2,3,1,2,3");
print(Array.isArray(array), true);

var number = g.eval("new Number(42)");
var bool = g.eval("new Boolean(false)");
var string = g.eval("new String('ponies')");
print(JSON.stringify({n:number, b:bool, s:string}), "{\"n\":42,\"b\":false,\"s\":\"ponies\"}");
print(JSON.stringify({arr:array}), "{\"arr\":[1,2,3]}");
print(JSON.stringify({2:'ponies', unicorns:'not real'}, array), "{\"2\":\"ponies\"}");
print(JSON.stringify({42:true, ponies:true, unicorns:'sad'}, [number, string]), "{\"42\":true,\"ponies\":true}");
print(JSON.stringify({a:true,b:false}, undefined, number), "{\n          \"a\": true,\n          \"b\": false\n}");
print(JSON.stringify({a:true,b:false}, undefined, string), "{\nponies\"a\": true,\nponies\"b\": false\n}");
