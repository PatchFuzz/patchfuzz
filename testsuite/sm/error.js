load(libdir + 'asserts.js');

let source = `class C {
    x =
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    -2;
    -2 = 2;
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    x += 2;
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    #2;
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    #["h" + "i"];
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    #"hi";
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    constructor;
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    "constructor";
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    x = arguments;
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    x = super();
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `function f() {
class C {
    #"should still throw error during lazy parse";
}
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `#outside;`;
assertErrorMessage(() => eval(source), SyntaxError, /./);

source = `class C {
    x = super();
}`;
assertErrorMessage(() => Function(source), SyntaxError, /./);

source = `class C {
    x = sper();
}`;
eval(source);






source = `class C {
    x = 0
    ["computedMethodName"](){}
}`;
assertThrowsInstanceOf(() => Function(source), SyntaxError);

source = `class C {
    x = 0
    *f(){}
}`;
assertThrowsInstanceOf(() => Function(source), SyntaxError);





source = `class C { x y }`;
assertThrowsInstanceOf(() => Function(source), SyntaxError);

source = `class C { if var }  
assertThrowsInstanceOf(() => Function(source), SyntaxError);

source = `class C { x = 1 y }`;
assertThrowsInstanceOf(() => Function(source), SyntaxError);

source = `class C { x async f() {} }`;
assertThrowsInstanceOf(() => Function(source), SyntaxError);

source = `class C { x static f() {} }`;
assertThrowsInstanceOf(() => Function(source), SyntaxError);

source = `class C { field1 static field2 }`;
assertThrowsInstanceOf(() => Function(source), SyntaxError);

source = `class C { x get f() {} }`;
assertThrowsInstanceOf(() => Function(source), SyntaxError);

if (typeof reportCompare === 'function') reportCompare(true, true);
