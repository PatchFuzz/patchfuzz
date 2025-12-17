print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Computed get-set property names",
        body: function () {
            const n = 1;
            const m = 2;
            const r = 0.5;
            const s = 'prop';
            function test2() {
                c = class {
                    get [n]() { return 42; }
                    set [m](val) { }
                    get [r]() { return 'a'; }
                    set [s](val) { }
                    get [1 & Math]() { return 42; }
                }

                d = {
                    get [n]() { return 42; },
                    set [m](val) {},
                    get [r]() { return 'a'; },
                    set [s](val) {}
                };
            }
            for (let i = 0; i < 100; ++i) {
                test2();
            }

            print('number', typeof ((new c())[1]), "Integer as class member getter property name");
            print('undefined', typeof ((new c())[2]), "Integer as class member setter property name");
            print('string', typeof ((new c())[0.5]), "Float as class member getter property name");
            print('undefined', typeof ((new c())['prop']), "String as class member setter property name");
            print('number', typeof ((new c())[1 & Math]), "Expression as class member setter property name");

            print('number', typeof (d[1]), "Integer as getter property name");
            print('undefined', typeof (d[2]), "Integer as setter property name");
            print('string', typeof (d[0.5]), "Float as getter property name");
            print('undefined', typeof (d['prop']), "String as setter property name");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
    