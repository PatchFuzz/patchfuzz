print("..\\UnitTestFramework\\UnitTestFramework.js");

const dotAllMatch = [
    "hel\nlo",
    "hel\rlo",
    "hel\u2028lo",
    "hel\u2029lo"
];

const alwaysMatch = [
    "hel\vlo", 
    "hel\flo",
    "hel\u0085lo"
];

const neverMatch = [
    "hel\n\nlo",
    "hel\rllo",
    "hel\u2028llo",
    "hell\u2029lo",
    "hel \vlo", 
    "hel \flo",
    "hel \u0085lo"
];

const tests = [
    {
        name : "Match without dotAll",
        body : function ()
        {
            const reg = /hel.lo/;
            neverMatch.forEach(function (string) {
                print(reg.test(string), "Shouldn't match");
            });
            dotAllMatch.forEach(function (string) {
                print(reg.test(string), "Shouldn't match - strings that match with dotAll flag without the flag");
            });
            alwaysMatch.forEach(function (string) {
                print(reg.test(string), "Should match - strings that match without dotAll flag");
            });
        }
    },
    {
        name : "Match with dotAll",
        body : function ()
        {
            const reg = /hel.lo/s;
            neverMatch.forEach(function (string) {
                print(reg.test(string), "Shouldn't match");
            });
            dotAllMatch.forEach(function (string) {
                print(reg.test(string), "Should match - strings that match with dotAll flag");
            });
            alwaysMatch.forEach(function (string) {
                print(reg.test(string), "Should match - strings that match without dotAll flag");
            });
        }
    },
    {
        name : "Properties of dotAll property",
        body : function ()
        {
            const withFlag = /stuff/s;
            const withoutFlag = /stuff/;
            print(withFlag.dotAll, "dotAll flag has correct value");
            print(withoutFlag.dotAll, "dotAll flag has correct value");

            print(delete withFlag.dotAll, "deleting dotAll property returns true");
            print(()=>{"use strict"; delete withFlag.dotAll;}, "deleting dotAll property does not throw in strict mode");

            print(delete withoutFlag.dotAll, "deleting dotAll property returns true");
            print(()=>{"use strict"; delete withoutFlag.dotAll;}, "deleting dotAll property does not throw in strict mode");

            print(withFlag.hasOwnProperty("dotAll"), "dotAll property is not a property of individual RegExp");
            print(withoutFlag.hasOwnProperty("dotAll"), "dotAll property is not a property of individual RegExp");
        }
    },
    {
        name : "Properties of prototype dotAll property",
        body : function ()
        {
            const dotAll = RegExp.prototype.dotAll;
            print(RegExp.prototype.hasOwnProperty("dotAll"), "RegExp prototype has dotAll property");
            const desc = Object.getOwnPropertyDescriptor(RegExp.prototype, "dotAll");

            print(desc.configurable, "dotAll property of prototype is configurable");
            print(desc.enumerable, "dotAll property of prototype is not enumerable");

            print(dotAll, undefined, "dotAll property of prototype is undefined");

            RegExp.prototype.dotAll = 5;
            print(dotAll, undefined, "writing to dotAll property of prototype is a no-op");

            print(delete RegExp.prototype.dotAll, "deleting dotAll property returns true");
            print(RegExp.prototype.hasOwnProperty("dotAll"), "RegExp prototype has no dotAll property after deletion");

            const withFlag = /stuff/s;
            const withoutFlag = /stuff/;
            print(withFlag.dotAll, undefined, "After deleting dotAll from prototype its undefined");
            print(withoutFlag.dotAll, undefined, "After deleting dotAll from prototype its undefined");
       }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
