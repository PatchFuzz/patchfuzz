




function write(v) { WScript.Echo(v + ""); }

function PrintDescriptor(name, propDesc) {
    write(name + ":configurable : " + propDesc.configurable);
    write(name + ":enumerable   : " + propDesc.enumerable);
    write(name + ":writable     : " + propDesc.writable);    
    write(name + ":getter       : " + propDesc.get);
    write(name + ":setter       : " + propDesc.set);    
    write(name + ":value        : " + propDesc.value);
}

function exceptToString(ee) {
    if (ee instanceof TypeError) return "TypeError";
    if (ee instanceof ReferenceError) return "ReferenceError";
    if (ee instanceof EvalError) return "EvalError";
    if (ee instanceof SyntaxError) return "SyntaxError";
    return "Unknown Error";
}

(function Test1() {
    "use strict";
    var str = "function.caller get";
        
    try {
        Test1.caller;
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();

(function Test2() {
    "use strict";
    var str = "function.caller set";
        
    try {
        Test2.caller = 10;
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();

(function Test3() {
    "use strict";
    var str = "function.arguments get";
        
    try {
        Test3.arguments;
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();

(function Test4() {
    "use strict";
    var str = "function.arguments set";
        
    try {
        Test4.arguments = 10;
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();

(function Test5() {
    "use strict";
    var str = "function.arguments and function.caller descriptors are undefined";

    
    var callerDescriptor = Object.getOwnPropertyDescriptor(function() {}, 'caller');
    var argumentsDescriptor = Object.getOwnPropertyDescriptor(function() {}, 'arguments');
    
    write("Return: " +
        (callerDescriptor === undefined) + " " +
        (argumentsDescriptor === undefined) + ": " +
        str);
})();

(function Test5() {
    "use strict";
    var str = "arguments.caller is not defined and arguments.callee getter and setter are equal/strictEqual to each other";
    
    
    var argumentsCallerDescriptor = Object.getOwnPropertyDescriptor(arguments, 'caller');
    var argumentsCalleeGet = Object.getOwnPropertyDescriptor(arguments, 'callee').get;
    var argumentsCalleeSet = Object.getOwnPropertyDescriptor(arguments, 'callee').set;
    
    write("Return: " + 
      (argumentsCallerDescriptor === undefined).toString() + " " +
      (argumentsCalleeGet === argumentsCalleeSet).toString() + ": " +
      str);
})();

(function Test6() {
    var str = "function.caller's value is a strict mode function";

    function foo() {
        "use strict";
        return goo();
    }

    function goo() {
        return goo.caller;  
    }

    try {
        foo();
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();


