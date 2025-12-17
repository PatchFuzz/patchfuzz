function print(successCondition) {
    if (!successCondition) {
        print("FAILED at:");
        print();
        throw "FAIL";
    }
}

function testNonStrict() {
    let foo = function () { }
    let bar = function () { }
    let arrow = () => { }
    let arrow2 = () => { }
    let native = print;
    let native2 = print;

    
    
    print(isNaN.hasOwnProperty("prototype") == false);
    print(foo.hasOwnProperty("prototype") == true);
    print(arrow.hasOwnProperty("prototype") == false);
    print(native.hasOwnProperty("prototype") == false);

    print(isFinite.hasOwnProperty("prototype") == false);
    print(bar.hasOwnProperty("prototype") == true);
    print(arrow2.hasOwnProperty("prototype") == false);
    print(native2.hasOwnProperty("prototype") == false);

    
    print(isNaN.hasOwnProperty("prototype") == false);
    print(foo.hasOwnProperty("prototype") == true);
    print(arrow.hasOwnProperty("prototype") == false);
    print(native.hasOwnProperty("prototype") == false);

    print(isFinite.hasOwnProperty("prototype") == false);
    print(bar.hasOwnProperty("prototype") == true);
    print(arrow2.hasOwnProperty("prototype") == false);
    print(native2.hasOwnProperty("prototype") == false);
}
noInline(testNonStrict);

function testStrict() {
    "use strict";

    let foo = function () { }
    let bar = function () { }
    let arrow = () => { }
    let arrow2 = () => { }
    let native = print;
    let native2 = print;

    
    
    print(isNaN.hasOwnProperty("prototype") == false);
    print(foo.hasOwnProperty("prototype") == true);
    print(arrow.hasOwnProperty("prototype") == false);
    print(native.hasOwnProperty("prototype") == false);

    print(isFinite.hasOwnProperty("prototype") == false);
    print(bar.hasOwnProperty("prototype") == true);
    print(arrow2.hasOwnProperty("prototype") == false);
    print(native2.hasOwnProperty("prototype") == false);

    
    print(isNaN.hasOwnProperty("prototype") == false);
    print(foo.hasOwnProperty("prototype") == true);
    print(arrow.hasOwnProperty("prototype") == false);
    print(native.hasOwnProperty("prototype") == false);

    print(isFinite.hasOwnProperty("prototype") == false);
    print(bar.hasOwnProperty("prototype") == true);
    print(arrow2.hasOwnProperty("prototype") == false);
    print(native2.hasOwnProperty("prototype") == false);
}
noInline(testStrict);

for (var i = 0; i < testLoopCount; ++i) {
    testNonStrict();
    testStrict();
}
