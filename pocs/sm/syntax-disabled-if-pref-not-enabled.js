;

function print(str, reflectParseOptions = undefined) {
    print(() => Reflect.parse(str, reflectParseOptions), SyntaxError);
}


print("{ using x = {} }");
print("using x = {}", { target: "module" });
print("{ using x = fn() }");
print("{ using x = fn(); }");
print("function f() { using x = fn(); }");
print("switch (x) { case 1: using x = fn(); }");
print("if (x == 1) { using x = fn(); }");
print("for (let i = 0; i < 10; i++) { using x = fn(); }");
print("for (const i of [1, 2, 3]) { using x = fn(); }");
print("for (const i in {a: 1, b: 2}) { using x = fn(); }");
print("function* gen() { using x = fn(); }");
print("async function* fn() { using x = fn(); }");
print("async function fn() { using x = fn(); }");
print("class xyz { static { using x = fn(); } }");
print("{ using a = fn1(), b = fn2(); }");
print("{ using x = null }");
print("{ using x = undefined }");
print("{ for (using x of y) {} }");
print("for (using x of y) {}");
print("for await (using x of y) {}", { target: "module" });
print("async function fn() { for await (using x of y) {} }");
print("{ using await = {}; }");
print("{ using yield = {}; }");
print("{ using public = {}; }");
print("{ using private = {}; }");
print("{ using protected = {}; }");
print("{ using static = {}; }");
print("{ using as = {}; }");
print("{ using async = {}; }");
print("{ using implements = {}; }");
print("{ using interface = {}; }");
print("{ using package = {}; }");
print("'use strict'; { using await = {}; }");
print("for (using await of y) {}");
print("for (using yield of y) {}");
print("using async = {};", { target: "module" });
print("await using async = {};", { target: "module" });
print("async function fn() { using async = {}; }");


print("await using x = {}", { target: "module" });
print("if (x == 1) { await using x = fn(); }", { target: "module" });
print("switch (x) { case 1: await using x = fn(); }", { target: "module" });
print("async function fn() { await using x = {}; }");
print("async function* gen() { await using x = {}; }");
print("for (let i = 0; i < 10; i++) { await using x = fn(); }", { target: "module" });
print("for (const i of [1, 2, 3]) { await using x = fn(); }", { target: "module" });
print("for (const i in {a: 1, b: 2}) { await using x = fn(); }", { target: "module" });
print("for (await using x of y) {}", { target: "module" });
print("for await (await using x of y) {}", { target: "module" });
print("async function fn() { for (await using x of y) {} }");
print("async function fn() { for await (await using x of y) {} }");
print("async function fn() { await using yield = {} }");
print("async function fn() { await using public = {} }");
print("async function fn() { await using private = {} }");
print("async function fn() { await using protected = {} }");
print("async function fn() { await using static = {} }");
print("async function fn() { await using as = {} }");
print("async function fn() { await using async = {} }");
print("async function fn() { await using implements = {} }");
print("async function fn() { await using package = {}; }");
print("await using as = {}", { target: "module" });
print("await using async = {};", { target: "module" });
print("for (await using of of y) {}", { target: "module" });


Reflect.parse("for (using of y) {}");
Reflect.parse("for (using of of) {}");
Reflect.parse("for (using\nof y) {}");
Reflect.parse("{ const using = 10; }");
Reflect.parse("{ let using = 10 }");
Reflect.parse("{ var using = 10 }");
Reflect.parse("{ using = 10 }");
Reflect.parse("{ using + 1 }");
Reflect.parse("{ using++ }");
Reflect.parse("{ using\nx = 10 }");
Reflect.parse("{ using = {x: 10} }");
Reflect.parse("{ x = { using: 10 } }");
Reflect.parse("{ x.using = 10 }");
Reflect.parse("{ x\n.using = 10 }");
Reflect.parse("{ using.x = 10 }");
Reflect.parse("{ using\n.x = 10 }");
Reflect.parse("for (using[1] of {}) {}");
Reflect.parse("for (using\n[1] of {}) {}")
Reflect.parse("for (using.x of {}) {}");
Reflect.parse("for (using\n.x of {}) {}");
Reflect.parse("for (x.using in {}) {}");
Reflect.parse("for (x\n.using in {}) {}")
Reflect.parse("{ using: x = 10; }");
Reflect.parse("{ using\n: x = 10; }");
Reflect.parse("{ using /a/g; }");
Reflect.parse("{ /using/g }");
Reflect.parse("{ using\nlet = {} }");
Reflect.parse("export const using = 10", { target: "module" });
Reflect.parse("import using from 'xyz'", { target: "module" });

const ast4 = Reflect.parse("{ using = 10 }");
print(ast4.body[0].body[0].type, "ExpressionStatement");
print(ast4.body[0].body[0].expression.type, "AssignmentExpression");
print(ast4.body[0].body[0].expression.left.type, "Identifier");
print(ast4.body[0].body[0].expression.left.name, "using");

const ast5 = Reflect.parse("for (using of y) {}");
print(ast5.body[0].type, "ForOfStatement");
print(ast5.body[0].left.type, "Identifier");
print(ast5.body[0].left.name, "using");

const ast6 = Reflect.parse("{ using + 1 }");
print(ast6.body[0].body[0].type, "ExpressionStatement");
print(ast6.body[0].body[0].expression.type, "BinaryExpression");
print(ast6.body[0].body[0].expression.left.type, "Identifier");
print(ast6.body[0].body[0].expression.left.name, "using");

const ast7 = Reflect.parse("for (using of of) {}");
print(ast7.body[0].type, "ForOfStatement");
print(ast7.body[0].left.type, "Identifier");
print(ast7.body[0].left.name, "using");
print(ast7.body[0].right.type, "Identifier");
print(ast7.body[0].right.name, "of");

const ast8 = Reflect.parse("for (using\nof y) {}");
print(ast8.body[0].type, "ForOfStatement");
print(ast8.body[0].left.type, "Identifier");
print(ast8.body[0].left.name, "using");
print(ast8.body[0].right.type, "Identifier");
print(ast8.body[0].right.name, "y");

const ast9 = Reflect.parse("for (using[1] of {}) {}");
print(ast9.body[0].type, "ForOfStatement");
print(ast9.body[0].left.type, "MemberExpression");
print(ast9.body[0].left.object.type, "Identifier");
print(ast9.body[0].left.object.name, "using");
print(ast9.body[0].left.property.type, "Literal");
print(ast9.body[0].left.property.value, 1);

const ast10 = Reflect.parse("for (using\n[1] of {}) {}");
print(ast10.body[0].type, "ForOfStatement");
print(ast10.body[0].left.type, "MemberExpression");
print(ast10.body[0].left.object.type, "Identifier");
print(ast10.body[0].left.object.name, "using");
print(ast10.body[0].left.property.type, "Literal");
print(ast10.body[0].left.property.value, 1);

const ast11 = Reflect.parse("{ /using/g }");
print(ast11.body[0].body[0].type, "ExpressionStatement");
print(ast11.body[0].body[0].expression.type, "Literal");
print(ast11.body[0].body[0].expression.value.source, "using");
print(ast11.body[0].body[0].expression.value.flags, "g");

const ast12 = Reflect.parse("{ using: x = 10; }");
print(ast12.body[0].body[0].type, "LabeledStatement");
print(ast12.body[0].body[0].label.type, "Identifier");
print(ast12.body[0].body[0].label.name, "using");

const ast13 = Reflect.parse("{ using\n: x = 10; }");
print(ast13.body[0].body[0].type, "LabeledStatement");
print(ast13.body[0].body[0].label.type, "Identifier");
print(ast13.body[0].body[0].label.name, "using");

const ast14 = Reflect.parse("{ using /a/g; }");

print(ast14.body[0].body[0].type, "ExpressionStatement");
print(ast14.body[0].body[0].expression.type, "BinaryExpression");
print(ast14.body[0].body[0].expression.operator, "/");
print(ast14.body[0].body[0].expression.left.type, "BinaryExpression");
print(ast14.body[0].body[0].expression.left.operator, "/");

const ast15 = Reflect.parse("import using from 'xyz'", { target: "module" });
print(ast15.body[0].type, "ImportDeclaration");
print(ast15.body[0].specifiers[0].type, "ImportSpecifier");
print(ast15.body[0].specifiers[0].name.name, "using");


Reflect.parse("await /xyz/g");
Reflect.parse("{ await /using/g }");
Reflect.parse("async function fn() { await using; }");
Reflect.parse("async function fn() { await\nusing; }")
Reflect.parse("async function fn() { await /using/g }");
Reflect.parse("async function fn() { await using/g }");
Reflect.parse("async function fn() { await using/\ng }");
Reflect.parse("async function fn() { for(await using;;) {} }");
Reflect.parse("await using;", { target: "module" });
Reflect.parse("await\nusing;", { target: "module" });
Reflect.parse("await /using/g", { target: "module" });
Reflect.parse("await using/g", { target: "module" });
Reflect.parse("await using/\ng", { target: "module" });
Reflect.parse("for(await using;;) {}", { target: "module" });
Reflect.parse("await using\nx;", { target: "module" });

const ast19 = Reflect.parse("await using", { target: "module" });
print(ast19.body[0].type, "ExpressionStatement");
print(ast19.body[0].expression.type, "UnaryExpression");
print(ast19.body[0].expression.operator, "await");
print(ast19.body[0].expression.argument.type, "Identifier");
print(ast19.body[0].expression.argument.name, "using");

const ast20 = Reflect.parse("await /using/g", { target: "module" });
print(ast20.body[0].type, "ExpressionStatement");
print(ast20.body[0].expression.type, "UnaryExpression");
print(ast20.body[0].expression.operator, "await");
print(ast20.body[0].expression.argument.type, "Literal");
print(ast20.body[0].expression.argument.value.source, "using");
print(ast20.body[0].expression.argument.value.flags, "g");

const ast21 = Reflect.parse("await using/g", { target: "module" });
print(ast21.body[0].type, "ExpressionStatement");
print(ast21.body[0].expression.type, "BinaryExpression");
print(ast21.body[0].expression.operator, "/");
print(ast21.body[0].expression.left.type, "UnaryExpression");
print(ast21.body[0].expression.left.operator, "await");
print(ast21.body[0].expression.left.argument.type, "Identifier");
print(ast21.body[0].expression.left.argument.name, "using");

const ast22 = Reflect.parse("for(await using;;) {}", { target: "module" });
print(ast22.body[0].type, "ForStatement");
print(ast22.body[0].init.type, "UnaryExpression");
print(ast22.body[0].init.operator, "await");
print(ast22.body[0].init.argument.type, "Identifier");
print(ast22.body[0].init.argument.name, "using");
