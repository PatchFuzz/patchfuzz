print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Class which extends null won't assert when we do super property references",
    body: function () {
        class c extends null {
            constructor() {
                return {}
            }
            meth() {
                super['prop'] = 'something';
                super.prop = 'something'
            }
        }
        print(()=>c.prototype.meth.call({}), TypeError, "This shouldn't crash but does throw a TypeError", "Unable to set property 'prop' of undefined or null reference");
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
