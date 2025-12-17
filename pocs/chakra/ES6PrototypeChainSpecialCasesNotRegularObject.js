print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
   {
       name: "String.prototype is a String",
       body: function ()
       {
            try
            {
                String.prototype.valueOf();
            }
            catch(e)
            {
                if (e instanceof TypeError && e.message === "String.prototype.valueOf: 'this' is not a String object") {
                    print(true,"String.prototype is not a generic object, it should be a String object")
                }
                print(true, "Investigate " + e);
            }
       }
   },
   {
       name: "Boolean.prototype is a Boolean",
       body: function ()
       {
            try
            {
                Boolean.prototype.valueOf();
            }
            catch(e)
            {
                if (e instanceof TypeError && e.message === "Boolean.prototype.valueOf: 'this' is not a Boolean object") {
                    print(true,"Boolean.prototype is not a generic object, it should be a Boolean object")
                }
                print(true, "Investigate " + e);
            }
       }
   },
   {
       name: "Number.prototype is a Number",
       body: function ()
       {
            try
            {
                Number.prototype.valueOf();
            }
            catch(e)
            {
                if (e instanceof TypeError && e.message === "Number.prototype.valueOf: 'this' is not a Number object") {
                    print(true,"Number.prototype is not a generic object, it should be a Number object")
                }
                print(true, "Investigate " + e);
            }
       }
   }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
