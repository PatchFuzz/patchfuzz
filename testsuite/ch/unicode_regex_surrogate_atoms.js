




Object.defineProperty(Object.getPrototypeOf({}), "echo", { value: function () { WScript.Echo(this); } });
function AssertEqual(actual, expected, msg) { ((actual === expected ? "Passed! " : "Failed (actual: " + actual + ", expected: " + expected + "). Message: ") + msg).echo(); };
Object.defineProperty(Object.getPrototypeOf({}), "equalTo", { value: function (other, msg) { AssertEqual(this.constructor(this), other, msg); } });


/a\u{20BB7}*b/u.test("a\uD842\uDFB7\uD842\uDFB7b").echo();


/a\u{20BB7}*\uD800\uDC00*b/u.test("a\uD842\uDFB7\u{20BB7}\uD800\uDC00\uD800\uDC00b").echo();


try {
    eval("/a\\u{20BB7}*\\uD800\\uDC00*b/").test("a\uD842\uDFB7\u{DFB7}\uD800\uDC00\uDC00b").echo();
} catch (ex) {
    ex.echo();
}


/a\uD800\uDC00*(\u{20BB7})\1b/u.test("a\u{20BB7}\u{20BB7}b").echo();


/a\uD800(\uDC00)b/u.test("a\uD800\uDC00b").echo();
/a\uD800[\uDC00]b/u.test("a\uD800\uDC00b").echo();


/a\uD800(\uDC00)*b/u.test("a\uD800\uDC00\uDC00b").echo();
/a\uD800[\uDC00]*b/u.test("a\uD800\uDC00\uDC00b").echo();


/a[\u{20BB7}]b/u.test("a\uD842\uDFB7b").echo();
/a[\u0000 - \u{20BB7}]b/u.test("a\uD842\uDFB7b").echo();
/a[\u0000-\u{20BB7}]b/u.test("a\uFFFFb").echo();
/a[\u0000-\u{20BB7}]b/u.test("a\uD900b").echo();
/a[\u0000-\u{20BB7}]b/u.test("a\u{10000}b").echo();
/a[\u0000-\u{20BB7}]b/u.test("a\u{20BB7}b").echo();
/a[\u0000-\u{20400}]b/u.test("a\u{20400}b").echo();
/a[\u0000-\u{203FF}]b/u.test("a\u{203FF}b").echo();
/a[\u0000-\u{20BB7}]b/u.test("a\u{0000}b").echo();
/a.b/u.test("a\uD900b").echo();


/a[\u0000-\u{20BB7}]b/u.test("a\u{20BB8}b").echo();
/a[\u1000-\u{20BB7}]b/u.test("a\u{0000}b").echo();
