print("..\\UnitTestFramework\\UnitTestFramework.js");


function checkNaN(value, message) {
    print(isNaN(value), message);
}

function checkNegZero(value, message) {
    print(1/value, -Infinity, message);
}

function checkPlusZero(value, message) {
    print(1/value, +Infinity, message);
}

function checkClose(value, target, message) {
    print(Math.abs(value - target) < 0.000000001, message)
}

const tests = [
    {
        name: "Constants",
        body() {
            print(Math.E      , 2.718281828459045, "Maths constant with wrong value");
            print(Math.PI     , 3.141592653589793, "Maths constant with wrong value");
            print(Math.LN10   , 2.302585092994046, "Maths constant with wrong value");
            print(Math.LN2    , 0.6931471805599453, "Maths constant with wrong value");
            print(Math.LOG2E  , 1.4426950408889633, "Maths constant with wrong value");
            print(Math.LOG10E , 0.4342944819032518, "Maths constant with wrong value");
            print(Math.SQRT1_2, 0.7071067811865476, "Maths constant with wrong value");
            print(Math.SQRT2  , 1.4142135623730951, "Maths constant with wrong value");
        }
    },
    {
        name : "Math.abs",
        body() {
            checkNaN(Math.abs(NaN), "Math.abs(NaN) should equal NaN");
            checkNaN(Math.abs(), "Math.abs() should equal NaN");
            checkPlusZero(Math.abs(-0), "Math.abs should convert -0 to 0");
            checkPlusZero(Math.abs(+0), "Math.abs should convert -0 to 0");

            var input = [+Infinity, -Infinity, -3.14, 3.14, -5, 5, 2147483647 , -2147483648 ];
            var expected = [+Infinity, +Infinity, 3.14, 3.14, 5, 5, 2147483647, 2147483648];
            for (var i in input) {
                print(Math.abs(input[i]) !== expected[i], `Math.abs(${input[i]}) should equal ${expected[i]}`);
            }
        }
    },
    {
        name : "Math.sqrt",
        body() {
            checkNaN(Math.sqrt(NaN), "Math.sqrt(NaN) should equal NaN");
            checkNaN(Math.sqrt(), "Math.sqrt() should equal NaN");
            checkNaN(Math.sqrt(-Infinity), "Math.sqrt(-Infinity) should equal NaN");
            checkNaN(Math.sqrt(-0.1), "Math.sqrt(-0.1) should equal NaN");
            checkPlusZero(Math.sqrt(+0), "Math.sqrt(+0) should be +0");
            checkNegZero(Math.sqrt(-0.0), "Math.sqrt(-0) should be -0");

            print(Math.sqrt(+Infinity), +Infinity, "Math.sqrt(+Infinity) should equal +Infinity")
            print(Math.sqrt(25), 5, "Math.sqrt(25) should equal 5")
        }
    },
    {
        name : "Math.cos",
        body() {
            checkNaN(Math.cos(), "Math.cos() should be NaN");
            checkNaN(Math.cos(NaN), "Math.cos(NaN) should be NaN");
            
            checkNaN(Math.cos(+Infinity), "Math.cos(+Infinity) should be NaN");
            checkNaN(Math.cos(-Infinity), "Math.cos(-Infinity) should be NaN");

            print(Math.cos(+0), 1, "Math.cos(+0) should be 1");
            print(Math.cos(-0.0), 1, "Math.cos(-0.0) should be 1");
            checkClose(Math.cos((Math.PI) / 2), 0, "Math.cos((Math.PI) / 2) should be 0");
            checkClose(Math.cos((Math.PI) / 3), 0.5, "Math.cos((Math.PI) / 3) should be 0.5");
        }
    },
    {
        name : "Math.acos",
        body() {
            checkNaN(Math.acos(), "Math.acos() should be NaN");
            checkNaN(Math.acos(NaN), "Math.acos(NaN) should be NaN");
            
            checkNaN(Math.acos(5.1), "Math.acos(5.1) should be NaN"); 
            checkNaN(Math.acos(-2), "Math.acos(-2) should be NaN");
            
            checkNaN(Math.acos(+Infinity), "Math.acos(+Infinity) should be NaN");
            checkNaN(Math.acos(-Infinity), "Math.acos(-Infinity) should be NaN");

            print(Math.acos(1), 0, "Math.acos(1) should be 0");
            print(Math.acos(0), (Math.PI) / 2, "Math.acos(0) should be (Math.PI) / 2");
            checkClose(Math.acos(0.5), (Math.PI) / 3, "Math.acos(0.5) should be (Math.PI) / 3");
        }
    },
    {
        name : "Math.sin",
        body() {
            checkNaN(Math.sin(), "Math.sin() should be NaN");
            checkNaN(Math.sin(NaN), "Math.sin(NaN) should be NaN");
            
            checkNaN(Math.sin(+Infinity), "Math.sin(+Infinity) should be NaN");
            checkNaN(Math.sin(-Infinity), "Math.sin(-Infinity) should be NaN");            
            
            checkPlusZero(Math.sin(+0.0), "Math.sin(+0.0) should be +0");
            checkNegZero(Math.sin(-0.0), "Math.sin(-0.0) should be -0");

            print(Math.sin(Math.PI / 2), 1, "Math.sin(Math.PI / 2) should be 1");
            checkClose(Math.sin(Math.PI / 6), 0.5, "Math.sin(Math.PI / 6) should be 0.5");
        }
    },
    {
        name : "Math.asin",
        body() {
            checkNaN(Math.asin(), "Math.asin() should be NaN");
            checkNaN(Math.asin(NaN), "Math.asin(NaN) should be NaN");
            
            checkNaN(Math.asin(5.1), "Math.asin(5.1) should be NaN"); 
            checkNaN(Math.asin(-2), "Math.asin(-2) should be NaN");
            
            checkNaN(Math.asin(+Infinity), "Math.asin(+Infinity) should be NaN");
            checkNaN(Math.asin(-Infinity), "Math.asin(-Infinity) should be NaN");

            print(Math.asin(1), (Math.PI) / 2, "Math.asin(1) should be (Math.PI) / 2");
            checkClose(Math.asin(0.5), (Math.PI) / 6, "Math.asin(0.5) should be (Math.PI) / 6");

            checkPlusZero(Math.asin(+0), "Math.asin(+0) should be +0");
            checkNegZero(Math.asin(-0.0), "Math.asin(-0.0) should be -0");
        }
    },
    {
        name : "Math.atan",
        body() {
            checkNaN(Math.atan(), "Math.atan() should be NaN");
            checkNaN(Math.atan(NaN), "Math.atan(NaN) should be NaN");

            print(Math.atan(+Infinity), (Math.PI) / 2, "Math.atan(+Infinity) should be (Math.PI) / 2");
            print(Math.atan(-Infinity), -(Math.PI) / 2, "Math.atan(-Infinity) should be -(Math.PI) / 2");
            print(Math.atan(1), (Math.PI) / 4, "Math.atan(1) should be (Math.PI) / 4");

            checkPlusZero(Math.atan(+0), "Math.atan(+0) should be +0");
            checkNegZero(Math.atan(-0.0), "Math.atan(-0.0) should be -0");
        }
    },
    {
        name : "Math.tan",
        body() {
            checkNaN(Math.tan(), "Math.tan() should be NaN");
            checkNaN(Math.tan(NaN), "Math.tan(NaN) should be NaN");
            
            checkNaN(Math.tan(+Infinity), "Math.tan(+Infinity) should be NaN");
            checkNaN(Math.tan(-Infinity), "Math.tan(-Infinity) should be NaN");
            
            checkPlusZero(Math.tan(+0), "Math.tan(+0) should be +0");
            checkNegZero(Math.tan(-0.0), "Math.tan(-0.0) should be -0");

            checkClose(Math.tan(Math.PI / 4), 1, "Math.tan(Math.PI / 4) should be 1");
        }
    },
    {
        name : "Math.exp",
        body() {
            checkNaN(Math.exp(), "Math.exp() should be NaN");
            checkNaN(Math.exp(NaN), "Math.exp(NaN) should be NaN");

            print(Math.exp(+0), 1, "Math.exp(1) should be 1");
            print(Math.exp(-0.0), 1, "Math.exp(-0.0) should be 1");
            print(Math.exp(+Infinity), +Infinity, "Math.exp(+Infinity) should be +Infinity");
            print(Math.exp(-Infinity), 0, "Math.exp(-Infinity) should be 0");
            checkClose(Math.exp(3), Math.E * Math.E * Math.E, "Math.exp(3) should be Math.E * Math.E * Math.E");
        }
    },
    {
        name : "Math.log",
        body() {
            checkNaN(Math.log(), "Math.log() should be NaN");
            checkNaN(Math.log(NaN), "Math.log(NaN) should be NaN");

            print(Math.log(+0), -Infinity, "Math.log(+0) should be -Infinity");
            print(Math.log(-0.0), -Infinity, "Math.log(-0.0) should be -Infinity");
            print(Math.log(1), 0, "Math.log(1) should be 0");
            print(Math.log(+Infinity), +Infinity, "Math.log(+Infinity) should be +Infinity");
            print(Math.log(Math.E*Math.E*Math.E), 3, "Math.log(Math.E*Math.E*Math.E) should be 3");
        }
    },
    {
        name : "Math.pow",
        body() {
            function checkNaNPow(x, y) {
                checkNaN(Math.pow(x, y), `Math.pow(${x}, ${y}) should be NaN`);
            }
            function check(result, x, y) {
                var pow = Math.pow(x, y);
                if (result !== 0) {
                    if (pow !== result) {
                        checkClose(pow, result, `Math.pow(${x}, ${y}) should equal ${result}`);
                    }
                } else if (1 / result === +Infinity) {
                    checkPlusZero(pow, `Math.pow(${x}, ${y}) should equal +0`);
                } else {
                    checkNegZero(pow, `Math.pow(${x}, ${y}) should equal -0`);
                }
            }

            checkNaN(Math.pow(), "Math.pow() should be NaN");
            checkNaNPow(NaN, NaN);
            checkNaNPow(Infinity, NaN);
            checkNaNPow(-Infinity, NaN);
            checkNaNPow(0, NaN);
            checkNaNPow(-0, NaN);
            checkNaNPow(3, NaN);
            checkNaNPow(-3, NaN);

            check(1, NaN, 0);
            check(1, Infinity, 0);
            check(1, -Infinity, 0);
            check(1, 0, 0);
            check(1, -0, 0);
            check(1, 3, 0);
            check(1, -3, 0);

            check(1, NaN, -0);
            check(1, Infinity, -0);
            check(1, -Infinity, -0);
            check(1, 0, -0);
            check(1, -0, -0);
            check(1, 3, -0);
            check(1, -3, -0);

            checkNaNPow(NaN, 3);
            checkNaNPow(NaN, Infinity);
            checkNaNPow(NaN, -Infinity);

            check(Infinity, +1.1, Infinity);
            check(Infinity, -1.1, Infinity);

            check(0, +1.1, -Infinity);
            check(0, -1.1, -Infinity);

            checkNaNPow(+1, Infinity);
            checkNaNPow(-1, Infinity);

            checkNaNPow(+1, -Infinity);
            checkNaNPow(-1, -Infinity);

            check(0, +0.9, Infinity);
            check(0, -0.9, Infinity);

            check(Infinity, +0.9, -Infinity);
            check(Infinity, -0.9, -Infinity);

            check(Infinity, Infinity, 0.1);
            check(+0, Infinity, -0.1);

            check(-Infinity, -Infinity, 3);
            check(+Infinity, -Infinity, 4);

            check(-0, -Infinity, -3);
            check(+0, -Infinity, -4);

            check(0, 0, 0.1);

            check(+Infinity, +0, -3);
            check(+Infinity, +0, -0.1);
            check(+Infinity, -0, -1.1);

            check(-0.0, -0, +3);
            check(+0.0, -0, +4);
            check(-Infinity, -0, -3);
            check(+Infinity, -0, -4);

            checkNaNPow(-3, 3.3);

            check(25, 5, 2);

            check(25, -5, 2);
            check(1/25, -5, -2);
        }
    },
    {
        name : "Math.atan2",
        body() {
            checkNaN(Math.atan2(), "Math.atan2() should be NaN");
            checkNaN(Math.atan2(NaN, NaN), "Math.atan2(NaN, NaN) should be NaN");
            checkNaN(Math.atan2(2, NaN), "Math.atan2(2, NaN) should be NaN");
            checkNaN(Math.atan2(NaN, -3), "Math.atan2(NaN, -3) should be NaN");

            function checkATan2(result, a, b) {
                print(Math.atan2(a, b), result, `Math.atan2(${a}, ${b}) should equal ${result}`);
            }

            checkATan2((Math.PI) / 2, 3, +0);
            checkATan2((Math.PI) / 2, 3, -0);

            checkPlusZero(Math.atan2(0, 3),"Math.atan2(0, 3) should equal +0");
            checkPlusZero(Math.atan2(0, 0),"Math.atan2(0, 0) should equal +0");
            checkATan2(Math.PI, 0, -0);
            checkATan2(Math.PI, 0, -2);

            checkNegZero(Math.atan2(-0, 3),"Math.atan2(-0, 3) should equal -0");
            checkNegZero(Math.atan2(-0, 0),"Math.atan2(-0, 0) should equal -0");

            checkATan2(-Math.PI, -0, -0);
            checkATan2(-Math.PI, -0, -2);

            checkATan2(-(Math.PI) / 2, -3, +0);
            checkATan2(-(Math.PI) / 2, -3, -0);

            checkPlusZero(Math.atan2(3, +Infinity),"Math.atan2(3, +Infinity) should equal +0");
            checkATan2((Math.PI), 3, -Infinity);
            checkATan2((-Math.PI), -3, -Infinity);

            checkNegZero(Math.atan2(-3, +Infinity),"Math.atan2(-3, +Infinity) should equal -0");

            checkATan2((Math.PI)/2, +Infinity, 3);
            checkATan2(-(Math.PI) / 2, -Infinity, 3);
            checkATan2((Math.PI) / 2, +Infinity, -3);
            checkATan2(-(Math.PI) / 2, -Infinity, -3);

            checkATan2(Math.PI / 4, +Infinity, +Infinity);
            checkATan2(3 * Math.PI / 4, +Infinity, -Infinity);
            checkATan2(-Math.PI / 4, -Infinity, +Infinity);
            checkATan2(-3 * Math.PI / 4, -Infinity, -Infinity);

            checkATan2((Math.PI) / 4, 5, 5.0);
        }
    },
    {
        name: "Math.ceil and Math.floor",
        body() {
            checkNaN(Math.ceil(NaN), "Math.ceil(NaN) should be NaN");
            checkNaN(Math.ceil(), "Math.ceil() should be NaN");
            checkNaN(Math.floor(NaN), "Math.floor(NaN) should be NaN");
            checkNaN(Math.floor(), "Math.floor() should be NaN");

            function check(result, value) {
                var ceil = Math.ceil(value);
                var floor = Math.floor(-value);
                if (result !== 0) {
                    print(ceil, result, `Math.ceil(${value}) should equal ${result} not ${ceil}`);
                    print(-floor, result, `-Math.floor(${-value}) should equal ${result} not ${-floor}`);
                } else if (1/result === -Infinity || (value > -1 && value < 1 && value !== 0)) {
                    checkNegZero(ceil, `Math.ceil(${value}) should equal -0 not ${ceil}`);
                    checkPlusZero(floor, `Math.floor(${-value}) should equal +0 not ${floor}`)
                } else {
                    checkPlusZero(ceil, `Math.ceil(${value}) should equal +0 not ${ceil}`);
                    checkNegZero(floor, `Math.floor(${-value}) should equal -0 not ${floor}`)
                }
            }
            
            check(+0, +0);
            check(-0, -0);
            check(+Infinity, +Infinity);
            check(-Infinity, -Infinity);

            
            check(-0, -4.9406564584124654000e-324);
            check(-0, -9.8813129168249309000e-324);
            check(-0, -0.5);
            check(-0, -9.9999999999999989000e-001);
            check(-0, -9.9999999999999978000e-001);
            check(-1, -1);
            check(1,   4.9406564584124654000e-324);
            check(1,   9.8813129168249309000e-324);
            check(1, 0.5);
            check(1, 9.9999999999999989000e-001);
            check(1, 9.9999999999999978000e-001);
            check(1, 1);

            
            var x = 1;
            for(var i = 0; i < 50; ++i)
            {
                check(x, x - 0.1);
                check(-x + 1, -x + 0.1);
                x = x * 2;
            }
            check(54, 53.7);
            check(112233581321, 112233581320.001);

            
            check(1.7976931348623157000e+308, 1.7976931348623157000e+308);
            check(-1.7976931348623157000e+308, -1.7976931348623157000e+308)

            
            print(Math.ceil(2147483648) <= 2147483647, "Math.ceil(2147483648) should not be <= 2147483647");
            print(Math.ceil(-2147483649) >= -2147483648, "Math.ceil(-2147483649) should not be >= -2147483648");

            check(-0, -0.1);
            check(-0, -0);
            
        }
    },
    {
        name : "Math.round",
        body() {
            
            checkNaN(Math.round(NaN), "Math.round(NaN) should be NaN");
            checkNaN(Math.round(Math.asin(2.0)), "Math.round(Math.asin(2.0)) should be NaN");
            checkNaN(Math.round(), "Math.round() should be NaN");

            
            print(Infinity, Math.round(Infinity), "Math.round(Infinity)");
            print(-Infinity, Math.round(-Infinity), "Math.round(-Infinity)");

            
            checkPlusZero(Math.round(+0), "Math.round(+0)");
            checkNegZero(Math.round(-0), "Math.round(-0)");

            
            checkPlusZero(Math.round(4.9999999999999994000e-001), "round largest value < 0.5"); 
            checkPlusZero(Math.round(4.9999999999999989000e-001), "round 2nd largest value < 0.5");
            checkPlusZero(Math.round(4.9406564584124654000e-324), "round smallest value > 0");
            checkPlusZero(Math.round(9.8813129168249309000e-324), "round 2nd smallest value > 0");
            for(var i = 0.001; i < 0.5; i += 0.001)
            {
                checkPlusZero(Math.round(i), "round " + i);
            }

            
            checkNegZero(Math.round(-4.9406564584124654000e-324), "round most positive value < 0");
            checkNegZero(Math.round(-9.8813129168249309000e-324), "round 2nd most positive value < 0");
            checkNegZero(Math.round(-4.9999999999999994000e-001), "round most negative value > -0.5");
            checkNegZero(Math.round(-4.9999999999999989000e-001), "round 2nd most negative value > -0.5");
            checkNegZero(Math.round(-0), "round -0 should be -0");

            for(var i = -0.001; i > -0.5; i -= 0.001)
            {
                checkNegZero(Math.round(i), "round " + i);
            }

            
            print(1, Math.round(1), "round 1");
            print(2, Math.round(2), "round 2");
            print(-1, Math.round(-1), "round -1");
            print(-2, Math.round(-2), "round -2");
            print(4294967295, Math.round(4294967295), "round 4294967295");
            print(4294967296, Math.round(4294967296), "round 4294967296");
            print(-4294967296, Math.round(-4294967296), "round -4294967296");
            for(var i = 1000; i < 398519; i += 179)
            {
                print(i, Math.round(i), "round " + i);
            }
            for(var i = 0.001; i <= 0.5; i += 0.001)
            {
                print(1, Math.round(0.5 + i), "round " + (0.5+i));
            }
            for(var i = -0.001; i >= -0.5; i -= 0.001)
            {
                print(-1, Math.round(-0.5 + i), "round " + (-0.5+i));
            }

            
            print(1, Math.round(0.5), "round 0.5");
            print(2, Math.round(1.5), "round 1.5");
            print(3, Math.round(2.5), "round 2.5");
            print(4294967296, Math.round(4294967295 + 0.5), "round 4294967295.5");
            for(var i = -100000; i <= 100000; i += 100)
            {
                print(i+1, Math.round(i + 0.5), "round " + (i+0.5));
            }

            
            print(30593859183, Math.round(30593859183.3915898), "round a double with high precision");
            print(1, Math.round(5.0000000000000011000e-001), "round smallest value > 0.5");
            print(1, Math.round(5.0000000000000022000e-001), "round 2nd smallest value > 0.5");
            print(1.7976931348623157000e+308, Math.round(1.7976931348623157000e+308), "round largest number < Infinity");
            print(1.7976931348623155000e+308, Math.round(1.7976931348623155000e+308), "round 2nd largest number < Infinity");
            print(-1.7976931348623157000e+308, Math.round(-1.7976931348623157000e+308), "round least positive number > -Infinity");
            print(-1.7976931348623155000e+308, Math.round(-1.7976931348623155000e+308), "round 2nd least positive number > -Infinity");

            
            print(4503599627370496, Math.round(4503599627370496), "round 4503599627370496");
            print(4503599627370497, Math.round(4503599627370497), "round 4503599627370497");
            print(4503599627370548, Math.round(4503599627370548), "round 4503599627370548");
            print(9007199254740991, Math.round(9007199254740991), "round 9007199254740991");
            print(-4503599627370496, Math.round(-4503599627370496), "round -4503599627370496");
            print(-4503599627370497, Math.round(-4503599627370497), "round -4503599627370497");
            print(-4503599627370548, Math.round(-4503599627370548), "round -4503599627370548");
            print(-9007199254740991, Math.round(-9007199254740991), "round -9007199254740991");

            
            print(Math.round(2147483648) <= 2147483647, "Math.round(2147483648)")
            print(Math.round(-2147483649) >= -2147483648, "Math.round(-2147483649)")
        }
    }

];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
