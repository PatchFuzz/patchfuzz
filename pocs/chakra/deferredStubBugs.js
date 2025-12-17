let pass = 'pass';
let fail = 'fail';

function func4(a = 123) {
    function v8() {
        function v9() {
            return v9;
        }
        return v9();
    }
    return v8();
}
func4();


var func5 = (a = 123) => (function v6() {
    function v7() {
        return v7;
    }
    return v7();
})()
func5();

function func6(a = v => { print(pass); }, b = v => { return a; }) {
    function c() {
        return b();
    }
    return c();
}
func6()();

function func7(a, b = function() { return pass; }, c) {
    function func8(d, e = function() { return b; }, f) {
        return e;
    }
    return func8();
}
print(func7()()());

var func9 = (a, b = () => pass, c) => {
    var func10 = (d, e = () => b, f) => {
        return e;
    }
    return func10();
}
print(func9()()());

var func11 = (a, b = () => { return pass; }, c) => {
    var func12 = (d, e = () => { return b; }, f) => {
        return e;
    }
    return func12();
}
print(func11()()());

function func13(a = (b = () => pass, c = () => fail) => b()) {
    return a();
}
print(func13());

function func14(a = (b = () => { return fail; }, c = () => { return pass; }) => { return c(); }) {
    return a();
}
print(func14());

function func15(a = class A { meth() { return pass } static meth2() { return fail; } }, b = v => fail, c = (v) => { return fail }, d = fail) {
    return new a().meth();
}
print(func15());
function func16(a = class A { meth() { return fail } static meth2() { return pass; } }, b = v => fail, c = (v) => { return fail }, d = fail) {
    return a.meth2();
}
print(func16());
function func17(a = class A { meth() { return fail } static meth2() { return fail; } }, b = v => pass, c = (v) => { return fail }, d = fail) {
    return b();
}
print(func17());
function func18(a = class A { meth() { return fail } static meth2() { return fail; } }, b = v => fail, c = (v) => { return pass }, d = fail) {
    return c();
}
print(func18());

function func19() {
  return (function(a = { b() {} }){ return pass; })();
}
print(func19());

function func20() {
  return (function(a = { b() {} }, c = function() { return pass; }){ return c(); })();
}
print(func20());
