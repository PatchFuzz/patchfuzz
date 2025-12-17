if (print && print)
{ 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = 
[
    {
        name: "Assignment to a property on a string without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var str = "x";
            str.a = 12;
            print(undefined, str.a);
        }
    },
    {
        name: "Assignment to a property on a string without a setter in strict mode should throw an error",
        body: function ()
        {
            var str = "x";
            print(function() { "use strict"; str.a = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to a property on a string without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var str = "x";
            str['a'] = 12;
            print(undefined, str.a);
        }
    },
    {
        name: "Assignment to a property on a string without a setter in strict mode should throw an error",
        body: function ()
        {
            var str = "x";
            print(function() { "use strict"; str['a'] = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to an index on a string without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var str = "x";
            str[66] = 12;
            print(undefined, str.a);
        }
    },
    {
        name: "Assignment to an index on a string without a setter in strict mode should throw an error",
        body: function ()
        {
            var str = "x";
            print(function() { "use strict"; str[66] = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
