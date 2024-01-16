
function doTest(expected, v) {
    assertEq(Object.prototype.toString.call(v), expected)
}

function Dummy() {}


doTest("[object Undefined]", undefined);
doTest("[object Null]", null);
doTest("[object String]", "");
doTest("[object Number]", 12);
doTest("[object Number]", 12.34);
doTest("[object Boolean]", true);
doTest("[object Symbol]", Symbol());
doTest("[object BigInt]", 1234n);


doTest("[object Array]", []);
(function() {
    doTest("[object Arguments]", arguments);
})();
doTest("[object Function]", () => {});
doTest("[object Error]", new Error);
doTest("[object Date]", new Date);
doTest("[object RegExp]", /i/);


doTest("[object Map]", new Map);
doTest("[object Set]", new Set);
doTest("[object JSON]", JSON);
doTest("[object Math]", Math);


doTest("[object Object]", {});
doTest("[object Object]", new Dummy);
doTest("[object Foo]", { [Symbol.toStringTag]: "Foo" });


let receiver1;
let object1 = {
    __proto__: {
        get [Symbol.toStringTag]() {
            receiver1 = this;
        }
    }
};
doTest("[object Object]", object1);
assertEq(receiver1, object1);




let receiver2;
Object.defineProperty(String.prototype, Symbol.toStringTag, { get: function() {
    receiver2 = this;
    return "XString";
}});
doTest("[object XString]", "");
assertEq(Object.getPrototypeOf(receiver2), String.prototype);
