if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "With different types on right side",
        body: function () {
            print(1n === false);
            print(1n === 1);
            print(1n === "1");
            print(1n === "1.0");            
            print(1n === 1.0);        
            print(1n === {a: 1});
            print(1n === null);
            print(1n === undefined);
            print(1n === []);
            print(1n === Symbol());            
        }
    },
    {
        name: "With different types on left side",
        body: function () {
            print(true === 1n);
            print(1 === 1n);
            print("1" === 1n);
            print("1.0" === 1n);            
            print(1.0 === 1n);        
            print({a: 1} === 1n);
            print(null === 1n);
            print(undefined === 1n);
            print([] === 1n);
            print(Symbol() === 1n);            
        }
    },
    {
        name: "With same type BigInt",
        body: function () {
            print(0n === -0n);
            print(1n === 1n);
            print(1n === BigInt(1n));
            print(BigInt(2n) === BigInt(2n));
            print(BigInt(3n) === 3n);
            print(1n === 2n-1n);
            var x = 2n;
            var y = 2n;
            print(x === y);
            print(--x === 1n);
            print(y === 2n);
            print(x === y);
        }
    },
    {
        name: "Cross scope",
        body: function () {
            var y = 1n;
            var f = () => {
                return y;
            };
            var g = () => {
                return 1n;
            };
            var x = 1n;
            print(x === f());
            print(x === g());
            var o = {a: 1n};
            print(x == o.a);
        }
    },    
    {
        name: "Marshal",
        body: function () {
            let child_global = print('var val = 5n;', 'samethread');
            print(5n === child_global.val);
        }
    },    
    {
        name: "Module",
        body: function () {
            print("exporter.js", "export var val = 5n;");
            print("importer.js", 
            `   
                import { val } from 'exporter.js';
                print(5n === val);
            `);
            print("importer.js", "module");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
