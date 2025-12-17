print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests =
    [['sticky', 'y'],
     ['unicode', 'u'],
     ['dotAll', 's']].map(function ([propertyName, flag]) {
        return {
            name: "RegExp.prototype.flags should not include the '" + propertyName + "' flag when the feature is disabled",
            body: function () {
                var object = {};
                object[propertyName] = true;
                var getFlags = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
                var flags = getFlags.call(object);
                print(flags.includes(flag));
            }
        };
     });

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
