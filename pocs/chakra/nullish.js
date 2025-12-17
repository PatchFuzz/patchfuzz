print("..\\UnitTestFramework\\UnitTestFramework.js");

const o = {
    get prop() {
        print("Should not be called");
    }
}

var tests = [
    {
        name: "Object properties used as left-side for nullish operator",
        body () {
            const obj = {
                nullvalue: null,
                undefinedvalue: undefined,
                number: 123,
                zero: 0,
                falsevalue: false,
                emptystring: ''
            };
            const other = 'other';

            print(other, obj.nullvalue ?? other);
            print(other, obj.undefinedvalue ?? other);
            print(other, obj.notdefinedvalue ?? other);

            print(obj.number, obj.number ?? other);
            print(obj.zero, obj.zero ?? other);
            print(obj.falsevalue, obj.falsevalue ?? other);
            print(obj.emptystring, obj.emptystring ?? other);
        }
    },
    {
        name: "Primitive values used as left-side for nullish operator",
        body () {
            const other = 'other';

            print(other, null ?? other);
            print(other, undefined ?? other);

            print(123, 123 ?? other);
            print(0, 0 ?? other);
            print(false, false ?? other);
            print('', '' ?? other);
        }
    },
    {
        name: "Names used as left-side for nullish operator",
        body () {
            const nullvalue = null;
            const undefinedvalue = undefined;
            const number = 123;
            const zero = 0;
            const falsevalue = false;
            const emptystring = '';
            const other = 'other';

            print(other, nullvalue ?? other);
            print(other, undefinedvalue ?? other);

            print(number, number ?? other);
            print(zero, zero ?? other);
            print(falsevalue, falsevalue ?? other);
            print(emptystring, emptystring ?? other);
        }
    },
    {
        name: "Right-hand side is evaluated only if needed (short-circuiting)",
        body () {
            print('not null', 'not null' ?? o.prop);
        }
    },
    {
        name : "?? interaction with ||",
        body () {
            print(5, null ?? (5 || 4));
            print(5, 5 ?? (1 || 4));
            print(5, (null ?? 5) || 4);
            print(5, (5 ?? null) || 4);
            print(5, (5 ?? null) || o.prop);
        }
    },
    {
        name : "?? interaction with &&",
        body() {
            print(5, null ?? (2 && 5));
            print(5, (null ?? 2) && 5);
            print(5, 2 && (5 ?? o.prop ?? o.prop));
            print(5, 2 && (3 ?? o.prop) && 5);
            print(null, null && (null ?? 5));
        }  
    },
    {
        name: "?? cannot be used within || or && without parentheses",
        body() {
            function parse (code) {
                try {
                    eval ("function test() {" + code + "}");
                    return true;
                } catch {
                    return false;
                }
            }
            print(parse("a ?? b || c"));
            print(parse("a || b ?? c"));
            print(parse("a ?? b && c"));
            print(parse("a && b ?? c"));
            print(parse("a && (b ?? c)"));
            print(parse("(a && b) ?? c"));
            print(parse("a && (b ?? c)"));
            print(parse("a || (b ?? c)"));
            print(parse("(a || b) ?? c"));
            print(parse("a || (b ?? c)"));
            print(parse("a ?? (b ?? c) || a"));
            print(parse("(a ?? b ?? c) || a"));
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
