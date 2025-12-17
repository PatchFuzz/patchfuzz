;

let source = `class C {
    x =
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    -2;
    -2 = 2;
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    x += 2;
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    #2;
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    #["h" + "i"];
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    #"hi";
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    constructor;
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    "constructor";
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    x = arguments;
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    x = super();
}`;
print(() => Function(source), SyntaxError, /./);

source = `function f() {
class C {
    #"should still throw error during lazy parse";
}
}`;
print(() => Function(source), SyntaxError, /./);

source = `#outside;`;
print(() => eval(source), SyntaxError, /./);

source = `class C {
    x = super();
}`;
print(() => Function(source), SyntaxError, /./);

source = `class C {
    x = sper();
}`;
eval(source);






source = `class C {
    x = 0
    ["computedMethodName"](){}
}`;
print(() => Function(source), SyntaxError);

source = `class C {
    x = 0
    *f(){}
}`;
print(() => Function(source), SyntaxError);





source = `class C { x y }`;
print(() => Function(source), SyntaxError);

source = `class C { if var }  
print(() => Function(source), SyntaxError);

source = `class C { x = 1 y }`;
print(() => Function(source), SyntaxError);

source = `class C { x async f() {} }`;
print(() => Function(source), SyntaxError);

source = `class C { x static f() {} }`;
print(() => Function(source), SyntaxError);

source = `class C { field1 static field2 }`;
print(() => Function(source), SyntaxError);

source = `class C { x get f() {} }`;
print(() => Function(source), SyntaxError);

if (typeof reportCompare === 'function') reportCompare(true, true);
