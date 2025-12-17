print("..\\UnitTestFramework\\UnitTestFramework.js");


function testGen(func, values, count)
{
    const gen = func();
    let counter = 0;
    for (const value of gen)
    {
        print(value == values[counter]);
        ++counter;
    }
    print(counter, count);
}


const tests = [
    {
        name : "For - in with Arrow function sloppy",
        body : function () {
            const arr = [0,1,2,5];
            for (var a = () => { return "a"} in {});
            print(a(), "a");
            for (var a = () => { return "a"} in arr);
            print(a == "3");
        }
    },
    {
        name : "For - in with Arrow function strict",
        body : function () {
            "use strict";
            print(()=>{eval("for (var a = () => { return 'a'} in {});")}, SyntaxError);
        }
    },
    {
        name : "For - in with yield - sloppy",
        body : function () {
            function* gen1()
            {
                for (var a = yield 'a' in {b: 1}) {
                    print(a == "b");
                }
            }
            testGen(gen1, ["a"], 1);
            function* gen2()
            {
                for (var a = yield in {c: 1}) {
                    print(a == "c");
                }
            }
            testGen(gen2, [undefined], 1);
            function* gen3()
            {
                for (var a = yield 'd' in {} in {a: 1}) {
                    print(false, "shouldn't reach here");
                }
            }
            testGen(gen3, ['d'], 1);
        }
    },
    {
        name : "For - in with yield - strict",
        body : function () {
            "use strict";
            print(()=>{eval(`function* gen1()
            {
                for (var a = yield 'a' in {b: 1}) {
                    print(a == "b");
                }
            }`)}, SyntaxError);
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
