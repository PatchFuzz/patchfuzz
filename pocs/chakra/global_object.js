if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Test BigInt global object properties",
        body: function () {
            print(BigInt.length == 1);
            print(BigInt.name == "BigInt");
            print(BigInt.prototype == "[object Object]");
            print(BigInt.prototype.constructor === BigInt);
            print(BigInt.__proto__ === Function.prototype);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
