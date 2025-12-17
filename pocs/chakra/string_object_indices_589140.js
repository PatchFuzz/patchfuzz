if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Setting property with name == new string.length creates a property",
        body: function () {
            var s = new String(0);
            s[0] = 0;
            s[1] = 1;
            s[2] = 2;
            
            print(1, s.length, "new String(0) has length == 1");
            print('0', s[0], "new String(0) has character '0' at property named 0");
            print(0 === s[0], "Setting property with name < string.length doesn't work");
            print(1, s[1], "Setting property with name == string.length works");
            print(2, s[2], "Setting property with name > string.length works");
            
            var s = new String(123);
            s[0] = 0;
            s[1] = 1;
            s[2] = 2;
            s[3] = 3;
            s[4] = 4;
            
            print(3, s.length, "new String(123) has length == 3");
            print('1', s[0], "new String(123) has character '1' at property named 0");
            print(0 === s[0], "Setting property with name < string.length doesn't work");
            print('2', s[1], "new String(123) has character '2' at property named 1");
            print(1 === s[1], "Setting property with name < string.length doesn't work");
            print('3', s[2], "new String(123) has character '3' at property named 2");
            print(2 === s[2], "Setting property with name < string.length doesn't work");
            print(3, s[3], "Setting property with name == string.length works");
            print(4, s[4], "Setting property with name > string.length works");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
