print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "simple copy",
        body: function ()
        {
            let orig = {};
            let sym = Symbol("c");
            orig.a = 1;
            orig.b = "asdf";
            orig[sym] = "qwert";
            let newObj = Object.assign({}, orig);
            print(newObj.b, orig.b);
            print(newObj.a, orig.a);
            print(newObj[sym], orig[sym]);
        }
    },
    {
        name: "non-path type handler",
        body: function ()
        {
            let orig = {};
            orig.a = 1;
            orig.b = "asdf";
            delete orig.a;
            let newObj = Object.assign({}, orig);
            print(newObj.b, orig.b);
            print(newObj.a, orig.a);
        }
    },
    {
        name: "has getter",
        body: function ()
        {
            let orig = {};
            orig.a = 1;
            Object.defineProperty(orig, 'b', {
                get: function() { return "asdf"; }, enumerable: true
              });
            let newObj = Object.assign({}, orig);
            print(newObj.b, orig.b);
            print(newObj.a, orig.a);
        }
    },
    {
        name: "has setter",
        body: function ()
        {
            let orig = {};
            orig.a = 1;
            Object.defineProperty(orig, 'b', {
                set: function() {  }, enumerable: true
              });
            let newObj = Object.assign({}, orig);
            print(newObj.b, orig.b);
            print(newObj.a, orig.a);
        }
    },
    {
        name: "different proto",
        body: function ()
        {
            let protoObj = {};
            let orig = Object.create(protoObj);
            orig.a = 1;
            orig.b = "asdf";
            
            let newObj = Object.assign({}, orig);
            print(newObj.b, orig.b);
            print(newObj.a, orig.a);
        }
    },
    {
        name: "non-enumerable",
        body: function ()
        {
            let orig = {};
            orig.a = 1;
            Object.defineProperty(orig, 'b', {
                value: "asdf", enumerable: false
              });
            
            let newObj = Object.assign({}, orig);
            print(newObj.b, undefined);
            print(newObj.a, orig.a);
        }
    },
    {
        name: "proto accessor",
        body: function ()
        {
            Object.defineProperty(Object.prototype, 'b', {
                get: function() { return "asdf"; }
              });
            let orig = {};
            orig.a = 1;
            
            let newObj = Object.assign({}, orig);
            print(newObj.b, "asdf");
            print(newObj.a, orig.a);
        }
    },
    {
        name: "has object array",
        body: function ()
        {
            let orig = {};
            orig.a = 1;
            orig[0] = 2;
            
            let newObj = Object.assign({}, orig);
            print(newObj.a, orig.a);
            print(newObj[0], orig[0]);
        }
    },
    {
        name: "target has object array",
        body: function ()
        {
            let orig = {};
            orig.a = 1;
            orig[0] = 2;
            let newObj = {};
            newObj[0] = 3;
            Object.assign(newObj, orig);
            print(newObj.a, orig.a);
            print(newObj[0], orig[0]);
        }
    },
    {
        name: "has object array with non-enumerable prop",
        body: function ()
        {
            let orig = {};
            orig.a = 1;
            orig[0] = 2;
            
            Object.defineProperty(orig, '1', {
                value: "3", enumerable: false
              });
            
            let newObj = Object.assign({}, orig);
            print(newObj.a, orig.a);
            print(newObj[0], orig[0]);
            print(newObj[1], undefined);
        }
    },
    {
        name: "Throw on assign to read-only",
        body() {
            const obj = {
                get prop() { return 1; }
            };
            print(() => Object.assign(obj, obj), TypeError, "Object.assign should throw (readonly property)");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
