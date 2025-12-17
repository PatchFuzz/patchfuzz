function print(code) {
    try {
        eval(code);
        throw new Error("Should throw SyntaxError, but executed code without throwing");
    } catch(e) {
        if (!(e instanceof SyntaxError))
            throw new Error("Should throw SyntaxError, but threw " + e);
    }
}

print("let C = class { #constructor() {} }");
print("let C = class { static #constructor() {} }");
print("class C { #constructor() {} }");
print("class C { static #constructor() {} }");

print("let C = class { get #constructor() {} }");
print("let C = class { static get #constructor() {} }");
print("class C { get #constructor() {} }");
print("class C { static get #constructor() {} }");

print("let C = class { set #constructor(v) {} }");
print("let C = class { static set #constructor(v) {} }");
print("class C { set #constructor(v) {} }");
print("class C { static set #constructor(v) {} }");

print("let C = class { #constructor; }");
print("let C = class { static #constructor; }");
print("class C { #constructor; }");
print("class C { static #constructor; }");

