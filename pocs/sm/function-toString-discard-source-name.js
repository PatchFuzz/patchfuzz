function test() {

var propertyName = [
    
    "\\w+",

    
    "(?:'[^']*')",
    "(?:\"[^\"]*\")",

    
    "\\d+",

    
    "(?:\\[[^\\]]+\\])",
].join("|")

var nativeCode = RegExp([
    "^", "function", ("(" + propertyName + ")?"), "\\(", "\\)", "\\{", "\\[native code\\]", "\\}", "$"
].join("\\s*"));

function print(fun, expected) {
    var match = nativeCode.exec(fun.toString());
    print(match[1], expected);
}




eval(`
function funDecl() {}
function* genDecl() {}
async function asyncFunDecl() {}
async function* asyncGenDecl() {}
`);

print(funDecl, "funDecl");
print(genDecl, "genDecl");
print(asyncFunDecl, "asyncFunDecl");
print(asyncGenDecl, "asyncGenDecl");




eval(`
var funExpr = function fn() {};
var genExpr = function* fn() {};
var asyncFunExpr = async function fn() {};
var asyncGenExpr = async function* fn() {};
`);

print(funExpr, "fn");
print(genExpr, "fn");
print(asyncFunExpr, "fn");
print(asyncGenExpr, "fn");




eval(`
var funExprAnon = function() {};
var genExprAnon = function*() {};
var asyncFunExprAnon = async function() {};
var asyncGenExprAnon = async function*() {};
`);

print(funExprAnon, undefined);
print(genExprAnon, undefined);
print(asyncFunExprAnon, undefined);
print(asyncGenExprAnon, undefined);



eval(`
class classDecl {}
var classExpr = class C {};
var classExprAnon = class {};
var classExprAnonField = class {x = 1};

this.classDecl = classDecl;
`);

print(classDecl, "classDecl");
print(classExpr, "C");
print(classExprAnon, undefined);
print(classExprAnonField, undefined);



eval(`
class classDecl { constructor() {} }
var classExpr = class C { constructor() {} };
var classExprAnon = class { constructor() {} };

this.classDecl = classDecl;
`);

print(classDecl, "classDecl");
print(classExpr, "C");
print(classExprAnon, undefined);



eval(`
var obj = {
   m() {},
   *gm() {},
   async am() {},
   async* agm() {},
   get x() {},
   set x(_) {},
};
`);

print(obj.m, undefined);
print(obj.gm, undefined);
print(obj.am, undefined);
print(obj.agm, undefined);
print(Object.getOwnPropertyDescriptor(obj, "x").get, undefined);
print(Object.getOwnPropertyDescriptor(obj, "x").set, undefined);



eval(`
var obj = {
    "foo m"() {},
    * "foo gm"() {},
    async "foo am"() {},
    async* "foo agm"() {},
    get "foo x"() {},
    set "foo x"(_) {},
};
`);

print(obj["foo m"], undefined);
print(obj["foo gm"], undefined);
print(obj["foo am"], undefined);
print(obj["foo agm"], undefined);
print(Object.getOwnPropertyDescriptor(obj, "foo x").get, undefined);
print(Object.getOwnPropertyDescriptor(obj, "foo x").set, undefined);



eval(`
var obj = {
    100() {},
    *200() {},
    async 300() {},
    async* 400() {},
    get 500() {},
    set 500(_) {},
};
`);

print(obj[100], undefined);
print(obj[200], undefined);
print(obj[300], undefined);
print(obj[400], undefined);
print(Object.getOwnPropertyDescriptor(obj, 500).get, undefined);
print(Object.getOwnPropertyDescriptor(obj, 500).set, undefined);




var sym1 = Symbol();
var sym2 = Symbol("desc");
var sym3 = Symbol.for("reg-sym");
var sym4 = Symbol.match;
var sym5 = Symbol();

eval(`
var obj = {
    [sym1]() {},
    *[sym2]() {},
    async [sym3]() {},
    async* [sym4]() {},
    get [sym5]() {},
    set [sym5](_) {},
};
`);

print(obj[sym1], undefined);
print(obj[sym2], undefined);
print(obj[sym3], undefined);
print(obj[sym4], undefined);
print(Object.getOwnPropertyDescriptor(obj, sym5).get, undefined);
print(Object.getOwnPropertyDescriptor(obj, sym5).set, undefined);



eval(`
var arrowFn = () => {};
var asyncArrowFn = () => {};
`);

print(arrowFn, undefined);
print(asyncArrowFn, undefined);



eval(`
function asm() {
  "use asm";
  function f(){ return 0|0; }
  return {f: f};
}
`);

print(asm, "asm");
print(asm().f, "f");
}

var g = newGlobal({ discardSource: true });
g.evaluate(test.toString() + "test()");
