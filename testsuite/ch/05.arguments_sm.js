




"use strict";

function write(v) { WScript.Echo(v + ""); }

function PrintDescriptor(name, propDesc) {
    if (propDesc) {
        write(name + ":configurable : " + propDesc.configurable);
        write(name + ":enumerable   : " + propDesc.enumerable);
        write(name + ":writable     : " + propDesc.writable);
        write(name + ":getter       : " + propDesc.get);
        write(name + ":setter       : " + propDesc.set);
        write(name + ":value        : " + propDesc.value);
    } else {
        write(name + " :propDesc undefined");
    }
}

(function Test1() {
    var propDesc;

    try {
        propDesc = Object.getOwnPropertyDescriptor(arguments, "callee");
        PrintDescriptor("arguments.callee", propDesc);
    } catch (e) {
        write("Exception: " + e.message);
    }

    try {
        propDesc = Object.getOwnPropertyDescriptor(arguments, "caller");
        PrintDescriptor("arguments.caller", propDesc);
    } catch (e) {
        write("Exception: " + e.message);
    }

    try {
        var c = arguments.caller;
    } catch (e) {
        write("Exception: " + e.message);
    }

    try {
        arguments.caller = 10;
    } catch (e) {
        write("Exception: " + e.message);
    }

    try {
        var y = arguments.callee;
    } catch (e) {
        write("Exception: " + e.message);
    }

    try {
        arguments.callee = 20;
    } catch (e) {
        write("Exception: " + e.message);
    }
})();