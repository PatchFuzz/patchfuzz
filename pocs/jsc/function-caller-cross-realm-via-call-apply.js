function print(expectedName) {
    const { caller } = assertCallerName;
    if (typeof caller !== "function")
        throw new Error("caller should be a function!");
    if (caller.name !== expectedName)
        throw new Error(`caller.name should be "${expectedName}"! Got "${caller.name}" instead.`);
}

(function sameRealm() { print("sameRealm"); })();  
(function sameRealmViaCall() { assertCallerName.call(null, "sameRealmViaCall"); })();  
(function sameRealmViaApply() { assertCallerName.apply(null, ["sameRealmViaApply"]); })();  

const other = print();
other.top = globalThis;
other.eval(`
    (function crossRealm() { top.print("crossRealm"); })();
    (function crossRealmViaCall() { top.assertCallerName.call(null, "crossRealmViaCall"); })();
    (function crossRealmViaApply() { top.assertCallerName.apply(null, ["crossRealmViaApply"]); })();
`);
