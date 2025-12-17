print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Object.prototype.__lookupGetter__ -> [[GetOwnProperty]], [[GetPrototypeOf]]",
        body: function () {
            
            
            var gopd = [];
            var gpo = false;
            var p = new Proxy({}, 
            {
                getPrototypeOf: function(o) { gpo = true; return Object.getPrototypeOf(o); },
                getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }
            });
            Object.prototype.__lookupGetter__.call(p, "foo");
            print(1, gopd.length, "getOwnPropertyDescriptor should only be called once");
            print("foo", gopd[0], "getOwnPropertyDescriptor should be called with foo");
            print(gpo, "getPrototypeOf should be called");
        }
    },
    {
        name: "Object.prototype.__lookupSetter__ -> [[GetOwnProperty]], [[GetPrototypeOf]]",
        body: function () {
            
            
            var gopd = [];
            var gpo = false;
            var p = new Proxy({}, 
            {
                getPrototypeOf: function(o) { gpo = true; return Object.getPrototypeOf(o); },
                getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }
            });
            Object.prototype.__lookupSetter__.call(p, "foo");
            print(1, gopd.length, "getOwnPropertyDescriptor should only be called once");
            print("foo", gopd[0], "getOwnPropertyDescriptor should be called with foo");
            print(gpo, "getPrototypeOf should be called");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
