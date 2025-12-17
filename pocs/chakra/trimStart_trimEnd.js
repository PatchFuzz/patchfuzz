print("../UnitTestFramework/UnitTestFramework.js");

const tests = [
    {
        name: "trimLeft is same function as trimStart",
        body: function () {
            
            print(String.prototype.trimLeft, String.prototype.trimStart, "Both trimStart and trimLeft should point to the same function");
        }
    },
    {
        name: "trimRight is same function as trimEnd",
        body: function () {
            print(String.prototype.trimRight, String.prototype.trimEnd,  "Both trimRight and trimEnd should point to the same function");
        }
    },
    {
        name: "String.prototype.trimLeft.name is changed",
        body: function () {
            print(String.prototype.trimLeft.name, 'trimStart', "String.prototype.trimLeft.name should be named trimStart");
        }
    },
    {
        name: "String.prototype.trimRight.name is changed",
        body: function () {
            print(String.prototype.trimRight.name, 'trimEnd', "String.prototype.trimRight.name should be named trimEnd");

        }
    },
    {
        name: "String.prototype.trimStart.name is consistent",
        body: function () {
            print(String.prototype.trimStart.name, 'trimStart', "String.prototype.trimLeft.name should be named trimStart");

        }
    },
    {
        name: "String.prototype.trimEnd.name is changed",
        body: function () {
            print(String.prototype.trimEnd.name, 'trimEnd', "String.prototype.trimEnd.name should be named trimEnd");

        }
    }
];



for (var i = 0; i < tests.length; i ++) {tests[i].body()}