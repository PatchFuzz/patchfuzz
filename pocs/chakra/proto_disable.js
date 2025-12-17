if (print && print) {
    print("protolib.js");
}

var tests = [
    {
        name: "seal/freeze Object.prototype",
        body: function () {
            ["Object.seal(Object.prototype)", "Object.freeze(Object.prototype)"].forEach(function (expr) {
                verify_disable(expr, KEEP_ENABLED); 
            });
        }
    },

    {
        name: "delete Object.prototype.__proto__",
        body: function () {
            var eng = make_engine();

            var desc = eng.Object.getOwnPropertyDescriptor(eng.Object.prototype, "__proto__");
            eng.verify_disable("delete Object.prototype.__proto__");

            
            eng.Object.defineProperty(eng.Object.prototype, "__proto__", desc);
            eng.verify__proto__enabled();
        }
    },

    {
        name: "DefineOwnProperty with missing/different attribute set",
        body: function () {
            function getDescString(desc) {
                var set = [];
                for (var name in desc) {
                    set.push(name + ": " + desc[name]);
                }
                return '{' + set.join(", ") + '}';
            }

            function testDesc(desc, keepEnabled) {
                var expr = 'Object.defineProperty(Object.prototype, "__proto__", ' + getDescString(desc) + ')';

                var eng = make_engine();
                eng.__verify_disable(expr, keepEnabled);

                
                var otherDesc = eng.Object.getOwnPropertyDescriptor(eng.Object.prototype, "__proto__");
                for (var name in desc) {
                    print("" + desc[name], "" + otherDesc[name], name);
                }
            }

            var ATTR_NAMES = ["enumerable", "configurable"];
            var DEF_DESC = { enumerable: false, configurable: true };

            
            for (var n = 0; n < 3; n++) {
                var desc = {};
                for (var i = 0; i < 2; i++) {
                    if (n & (1 << i)) {
                        var name = ATTR_NAMES[i];
                        desc[name] = DEF_DESC[name];
                    }
                }

                testDesc(desc, KEEP_ENABLED); 
            }

            
            ATTR_NAMES.forEach(function (attr) {
                var desc = { enumerable: false, configurable: true };
                desc[attr] = !desc[attr];

                testDesc(desc, KEEP_ENABLED); 
            });

            testDesc({ enumerable: false, configurable: true }, KEEP_ENABLED);

            
            testDesc({ value: 234, writable: true, enumerable: false, configurable: true });
            testDesc({ set: function () { return "custom setter" }, enumerable: false, configurable: true });
        }
    },

    {
        name: "Change Object.prototype.__proto__ getter or setter",
        body: function () {
            make_engine().run(function () {
                var oldDesc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

                var p = { p: 12 };
                var p2 = { p2: 23 };
                var o = { o: 34 };

                print(Object.prototype, o.__proto__);
                o.__proto__ = p;
                print(p, Object.getPrototypeOf(o));

                
                Object.defineProperty(Object.prototype, "__proto__", { set: function () { } });
                print(p, o.__proto__);
                o.__proto__ = p2; 
                print(p, o.__proto__);
                Object.setPrototypeOf(o, p2); 
                print(p2, o.__proto__);

                
                Object.defineProperty(Object.prototype, "__proto__", { get: function () { return 123; } });
                print(123, o.__proto__);
                print(p2, Object.getPrototypeOf(o));
                Object.setPrototypeOf(o, p);
                print(123, o.__proto__);
                print(p, Object.getPrototypeOf(o));

                
                Object.defineProperty(Object.prototype, "__proto__", { get: oldDesc.get, set: oldDesc.set });
                print(p, o.__proto__);

                verify__proto__enabled();
            });
        }
    },
];
testRunner.run(tests);
