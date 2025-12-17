if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

let tests =
[
    {
        name: 'Converting "\\x00" to Number should return NaN',
        body: function () {
            let arr_tests = [Number("\x00"), Number(" \x00"), -" \x00", +"\x00", +"  \n\x00"];
            arr_tests.forEach(function (num, index) {
                print("number", typeof (num), "Element at index " + index + " has wrong type.");
                print(Number.isNaN(num), "Element at index " + index + " is " + num + ". It should be NaN.");
            });
        }
    },
    {
        name: "Converting empty strings or whitespace-only strings to Number should return 0",
        body: function () {
            let arr_tests = [Number(""), Number(" "), +"", -"", +"  ",
                +"\t\n\r\v\f\xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff"];

            arr_tests.forEach(function (num, index) {
                print("number", typeof (num), "Element at index " + index + " has wrong type.");
                print(0, num, "Element at index " + index + " is " + num + ". It should be 0.");
            });
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
