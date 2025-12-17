"use strict";

var global = newGlobal({newCompartment: true});
var dbg = new Debugger(global);
dbg.onDebuggerStatement = onDebuggerStatement;

global.eval(`
const normalObj = { };
const abruptObj = { };
const sym = Symbol("a symbol key");

const arr = [1, 2, 3];
const obj = {
    get stringNormal(){
        return "a value";
    },
    get stringAbrupt() {
        throw "a value";
    },
    get objectNormal() {
        return normalObj;
    },
    get objectAbrupt() {
        throw abruptObj;
    },
    get context() {
        return this;
    },

    1234: "number key",
    [sym]: "symbol key",
    stringProp: "a value",
    objectProp: {},
    method() {
        return "a value";
    },
    undefined: "undefined value",
};
const propObj = obj.objectProp;
const methodObj = obj.method;

const objChild = Object.create(obj);

const proxyChild = new Proxy(obj, {});

debugger;
`);

function onDebuggerStatement(frame) {
    const { environment } = frame;
    const arr = environment.getVariable("arr");
    const obj = environment.getVariable("obj");
    const objChild = environment.getVariable("objChild");
    const proxyChild = environment.getVariable("proxyChild");

    const sym = environment.getVariable("sym");
    const normalObj = environment.getVariable("normalObj");
    const abruptObj = environment.getVariable("abruptObj");
    const propObj = environment.getVariable("propObj");
    const methodObj = environment.getVariable("methodObj");

    print(arr.getProperty(1).return, 2);
    print(arr.getProperty("1").return, 2);

    print(obj.getProperty().return, "undefined value");

    print(obj.getProperty("missing").return, undefined);

    print(obj.getProperty("stringNormal").return, "a value");
    print(obj.getProperty("stringAbrupt").throw, "a value");

    print(obj.getProperty("objectNormal").return, normalObj);
    print(obj.getProperty("objectAbrupt").throw, abruptObj);

    print(obj.getProperty("context").return, obj);

    print(obj.getProperty(1234).return, "number key");
    print(obj.getProperty(sym).return, "symbol key");
    print(obj.getProperty("stringProp").return, "a value");
    print(obj.getProperty("objectProp").return, propObj);

    print(obj.getProperty("method").return, methodObj);

    print(objChild.getProperty().return, "undefined value");

    print(objChild.getProperty("missing").return, undefined);

    print(objChild.getProperty("stringNormal").return, "a value");
    print(objChild.getProperty("stringAbrupt").throw, "a value");

    print(objChild.getProperty("objectNormal").return, normalObj);
    print(objChild.getProperty("objectAbrupt").throw, abruptObj);

    print(objChild.getProperty("context").return, objChild);

    print(objChild.getProperty(1234).return, "number key");
    print(objChild.getProperty(sym).return, "symbol key");
    print(objChild.getProperty("stringProp").return, "a value");
    print(objChild.getProperty("objectProp").return, propObj);

    print(objChild.getProperty("method").return, methodObj);

    print(proxyChild.getProperty().return, "undefined value");

    print(proxyChild.getProperty("missing").return, undefined);

    print(proxyChild.getProperty("stringNormal").return, "a value");
    print(proxyChild.getProperty("stringAbrupt").throw, "a value");

    print(proxyChild.getProperty("objectNormal").return, normalObj);
    print(proxyChild.getProperty("objectAbrupt").throw, abruptObj);

    print(proxyChild.getProperty("context").return, proxyChild);

    print(proxyChild.getProperty(1234).return, "number key");
    print(proxyChild.getProperty(sym).return, "symbol key");
    print(proxyChild.getProperty("stringProp").return, "a value");
    print(proxyChild.getProperty("objectProp").return, propObj);

    print(proxyChild.getProperty("method").return, methodObj);
};
