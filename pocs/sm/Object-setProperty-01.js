"use strict";

var global = newGlobal({newCompartment: true});
var dbg = new Debugger(global);
dbg.onDebuggerStatement = onDebuggerStatement;

global.eval(`
const sym = Symbol("a symbol key");

const arr = [];
const obj = {
    set stringNormal(value) {
        this._stringNormal = value;
    },
    set stringAbrupt(value) {
        throw value;
    },

    set objectNormal(value) {
        this._objectNormal = value;
    },
    set objectAbrupt(value) {
        throw value;
    },

    set context(value) {
        this._context = this;
    },

    set 1234(value) {
        this._1234 = value;
    },

    set [sym](value) {
        this._sym = value;
    },

    get getterOnly() {},
    readOnly: "",

    stringProp: "",
    objProp: {},
};
Object.defineProperty(obj, "readOnly", { writable: false });

const objChild = Object.create(obj);
const proxyChild = new Proxy(obj, {});

const testObj = { };
const testChildObj = { };
const testProxyObj = { };

debugger;
`);

function onDebuggerStatement(frame) {
    const { environment } = frame;
    const sym = environment.getVariable("sym");
    const arr = environment.getVariable("arr");
    const obj = environment.getVariable("obj");
    const objChild = environment.getVariable("objChild");
    const proxyChild = environment.getVariable("proxyChild");

    print(arr.setProperty(1, "index 1").return, true);
    print(arr.getProperty(1).return, "index 1");
    print(arr.getProperty("1").return, "index 1");
    print(arr.getProperty(0).return, undefined);
    print(arr.getProperty("length").return, 2);

    print(arr.setProperty("2", "index 2").return, true);
    print(arr.getProperty(2).return, "index 2");
    print(arr.getProperty("2").return, "index 2");
    print(arr.getProperty(0).return, undefined);
    print(arr.getProperty("length").return, 3);

    const testObj = environment.getVariable("testObj");
    print(obj.setProperty("undefined", 123).return, true);
    print(obj.getProperty("undefined").return, 123);
    print(obj.setProperty().return, true);
    print(obj.getProperty("undefined").return, undefined);

    print(obj.setProperty("missing", 42).return, true);
    print(obj.getProperty("missing").return, 42);

    print(obj.setProperty("stringNormal", "a normal value").return, true);
    print(obj.getProperty("_stringNormal").return, "a normal value");
    print(obj.setProperty("stringAbrupt", "an abrupt value").throw, "an abrupt value");

    print(obj.setProperty("objectNormal", testObj).return, true);
    print(obj.getProperty("_objectNormal").return, testObj);
    print(obj.setProperty("objectAbrupt", testObj).throw, testObj);

    print(obj.setProperty("context", "a value").return, true);
    print(obj.getProperty("_context").return, obj);

    print(obj.setProperty(1234, "number value").return, true);
    print(obj.getProperty("_1234").return, "number value");

    print(obj.setProperty(sym, "symbol value").return, true);
    print(obj.getProperty("_sym").return, "symbol value");

    print(obj.setProperty("getterOnly", "a value").return, false);
    print(obj.setProperty("readOnly", "a value").return, false);

    print(obj.setProperty("stringProp", "a normal value").return, true);
    print(obj.getProperty("stringProp").return, "a normal value");

    print(obj.setProperty("objectProp", testObj).return, true);
    print(obj.getProperty("objectProp").return, testObj);

    const testChildObj = environment.getVariable("testChildObj");
    print(objChild.setProperty("undefined", 123).return, true);
    print(objChild.getProperty("undefined").return, 123);
    print(objChild.setProperty().return, true);
    print(objChild.getProperty("undefined").return, undefined);

    print(objChild.setProperty("missing", 42).return, true);
    print(objChild.getProperty("missing").return, 42);

    print(objChild.setProperty("stringNormal", "a normal child value").return, true);
    print(objChild.getProperty("_stringNormal").return, "a normal child value");

    print(objChild.setProperty("stringAbrupt", "an abrupt child value").throw, "an abrupt child value");

    print(objChild.setProperty("objectNormal", testChildObj).return, true);
    print(objChild.getProperty("_objectNormal").return, testChildObj);

    print(objChild.setProperty("objectAbrupt", testChildObj).throw, testChildObj);

    print(objChild.setProperty("context", "a value").return, true);
    print(objChild.getProperty("_context").return, objChild);

    print(objChild.setProperty(1234, "number value").return, true);
    print(objChild.getProperty("_1234").return, "number value");

    print(objChild.setProperty(sym, "symbol value").return, true);
    print(objChild.getProperty("_sym").return, "symbol value");

    print(objChild.setProperty("getterOnly", "a value").return, false);
    print(objChild.setProperty("readOnly", "a value").return, false);

    print(objChild.setProperty("stringProp", "a normal child value").return, true);
    print(objChild.getProperty("stringProp").return, "a normal child value");

    print(objChild.setProperty("objectProp", testChildObj).return, true);
    print(objChild.getProperty("objectProp").return, testChildObj);

    const testProxyObj = environment.getVariable("testProxyObj");
    print(proxyChild.setProperty("undefined", 123).return, true);
    print(proxyChild.getProperty("undefined").return, 123);
    print(proxyChild.setProperty().return, true);
    print(proxyChild.getProperty("undefined").return, undefined);

    print(proxyChild.setProperty("missing", 42).return, true);
    print(proxyChild.getProperty("missing").return, 42);

    print(proxyChild.setProperty("stringNormal", "a normal child value").return, true);
    print(proxyChild.getProperty("_stringNormal").return, "a normal child value");

    print(proxyChild.setProperty("stringAbrupt", "an abrupt child value").throw, "an abrupt child value");

    print(proxyChild.setProperty("objectNormal", testProxyObj).return, true);
    print(proxyChild.getProperty("_objectNormal").return, testProxyObj);

    print(proxyChild.setProperty("objectAbrupt", testProxyObj).throw, testProxyObj);

    print(proxyChild.setProperty("context", "a value").return, true);
    print(proxyChild.getProperty("_context").return, proxyChild);

    print(proxyChild.setProperty(1234, "number value").return, true);
    print(proxyChild.getProperty("_1234").return, "number value");

    print(proxyChild.setProperty(sym, "symbol value").return, true);
    print(proxyChild.getProperty("_sym").return, "symbol value");

    print(proxyChild.setProperty("getterOnly", "a value").return, false);
    print(proxyChild.setProperty("readOnly", "a value").return, false);

    print(proxyChild.setProperty("stringProp", "a normal child value").return, true);
    print(proxyChild.getProperty("stringProp").return, "a normal child value");

    print(proxyChild.setProperty("objectProp", testProxyObj).return, true);
    print(proxyChild.getProperty("objectProp").return, testProxyObj);
};
