if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "test0",
        body: function () {
            function bar()
            {
                o = {x:2};
            }
            o = {x:1}
            function test0()
            {
                var b;
                for(var i=0;i<2;i++)
                {
                    b = o.x <<= bar();
                }
                print(2, b);
            }
            test0();
            test0();
            o = {x:1};
            test0();
        }
    },
    {
        name: "test1",
        body: function () {
            var obj2 = {};
            var i32 = new Int32Array();
            var func0 = function () {
                return obj2;
            };
            Object.prototype.prop5 = 1;
            var a;
            for (var __loopvar0 = 4; __loopvar0 > 0; __loopvar0--) 
            {
                function func7(arg1) {
                    this.prop2 = arg1;
                }
                obj2 = new func7(obj2.prop5--);
            }
    
            print(1, obj2.prop2);
        }
    },
    {
        name: "test2",
        body: function (){
            function makeArrayLength(x) {
                if (!isNaN(x)) {
                    return Math.floor(x) & 65535;
                }
            }
            var obj0 = {};
            var c = 1;
            obj0.length = makeArrayLength(4294967295);
            
            for (; obj0.length--; c++) 
            {
                obj0 = {
                    method1: function () {
                        return function v1() {
                            ({ nd0: { method1: obj0 } } );
                        };
                    }
                };
            }
            print(2, c);
        }
    }
];
for (var i = 0; i < tests.length; i ++) {tests[i].body()}

