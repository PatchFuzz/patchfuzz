function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

var ThrowTypeError = Object.getOwnPropertyDescriptor(function() {
    "use strict";
    return arguments;
}(), "callee").get;

function testUnmappedArguments(args)
{
    var unmappedCalleeDesc = Object.getOwnPropertyDescriptor(args, "callee");
    shouldBe(ThrowTypeError, unmappedCalleeDesc.get);
    shouldBe(ThrowTypeError, unmappedCalleeDesc.set);
}

function testMappedArguments(args)
{
    var unmappedCalleeDesc = Object.getOwnPropertyDescriptor(args, "callee");
    shouldBe(unmappedCalleeDesc.value !== undefined, true);
}

function argumentGenerator1(a = 0) {
    return arguments;
}
testUnmappedArguments(argumentGenerator1());

function argumentGenerator2() {
    function inner(a = 0) {
        return arguments;
    }
    return inner();
}
testUnmappedArguments(argumentGenerator2());

function argumentGenerator3() {
    function inner(a = 0) {
        return arguments;
    }
    return arguments;
}
testMappedArguments(argumentGenerator3());

function argumentGenerator4(a = 0) {
    function inner() {
        return arguments;
    }
    return inner();
}
testMappedArguments(argumentGenerator4());

function argumentGenerator5() {
    function inner() {
        function inner2(a = 0) {
            return arguments;
        }
        return inner2();
    }
    return inner();
}
testUnmappedArguments(argumentGenerator5());

function argumentGenerator6(...a) {
    return arguments;
}
testUnmappedArguments(argumentGenerator6());

function argumentGenerator7() {
    function inner(...a) {
        return arguments;
    }
    return inner();
}
testUnmappedArguments(argumentGenerator7());

function argumentGenerator8() {
    function inner(...a) {
        return arguments;
    }
    return arguments;
}
testMappedArguments(argumentGenerator8());

function argumentGenerator9(...a) {
    function inner() {
        return arguments;
    }
    return inner();
}
testMappedArguments(argumentGenerator9());

function argumentGenerator10() {
    function inner() {
        function inner2(...a) {
            return arguments;
        }
        return inner2();
    }
    return inner();
}
testUnmappedArguments(argumentGenerator10());
