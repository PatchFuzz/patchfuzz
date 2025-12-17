print("..\\UnitTestFramework\\UnitTestFramework.js");

function verifyToStringSource(re, overriddenSource, expectedSource) {
    Object.defineProperty(re, 'source', {value: overriddenSource});
    var str = re.toString();
    var [, returnedSource,] = str.split('/');
    print(expectedSource, returnedSource, "source");
}

function verifyToStringFlags(re, overriddenFlags, expectedFlags) {
    Object.defineProperty(re, 'flags', {value: overriddenFlags});
    var str = re.toString();
    var [, , returnedFlags] = str.split('/');
    print(expectedFlags, returnedFlags, "flags");
}

function flattenArray(array) {
    return Array.prototype.concat.apply([], array);
}

var flagPropertyNames = [
    "global",
    "ignoreCase",
    "multiline",
    "options",
    "sticky",
    "unicode",
];
var nonGenericPropertyNames = flagPropertyNames.concat("source");
var propertyNames = nonGenericPropertyNames.concat("flags");

var tests = flattenArray(propertyNames.map(function (name) {
    
    
    
    return [
        {
            name: name + " exists on the prototype",
            body: function () {
                var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, name);
                print(descriptor, "descriptor");

                print(descriptor.enumerable, name + " is not enumerable");
                print(descriptor.configurable, name + " is configurable");
                print(descriptor.value, name + " does not have a value");
                print(descriptor.set, name + " does not have a setter");

                var getter = descriptor.get;
                print(getter, name + " has a getter");
                print('function', typeof getter, "Getter for " + name + " is a function");
                print("get " + name, descriptor.get.name, "Getter for " + name + " has the correct name");
                print(0, descriptor.get.length, "Getter for " + name + " has the correct length");
            }
        },
        {
            name: name + " does not exist on the instance",
            body: function () {
                var descriptor = Object.getOwnPropertyDescriptor(/./, name);
                print(descriptor, name);
            }
        },
        {
            name: name + " getter can be called by RegExp subclasses",
            body: function () {
                class Subclass extends RegExp {}
                var re = new Subclass();
                print(function () { re[name] });
            }
        },
        {
            name: name + " should be deletable",
            body: function () {
                var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, name);
                delete RegExp.prototype[name];
                print(name in RegExp.prototype);
                Object.defineProperty(RegExp.prototype, name, descriptor);
            }
        }
    ];
}));
tests = tests.concat(nonGenericPropertyNames.map(function (name) {
    return {
        name: name + " getter can not be called by non-RegExp objects",
        body: function () {
            var o = Object.create(/./);
            var getter = Object.getOwnPropertyDescriptor(RegExp.prototype, name).get;
            print(getter.bind(o));
        }
    };
}));
tests = tests.concat(flagPropertyNames.map(function (name) {
    return {
        name: name + " getter should return 'undefined' when called with RegExp prototype",
        body: function () {
            var getter = Object.getOwnPropertyDescriptor(RegExp.prototype, name).get;

            var result = getter.call(RegExp.prototype);

            print(result);
        }
    };
}));
tests = tests.concat([
    {
        name: "RegExp.prototype.source getter should return '(?:)' when called with RegExp prototype",
        body: function () {
            var getter = Object.getOwnPropertyDescriptor(RegExp.prototype, "source").get;

            var result = getter.call(RegExp.prototype);

            print("(?:)", result);
        }
    },
    {
        name: "RegExp.prototype.toString should be generic",
        body: function () {
            var re = {
                source: "source",
                flags: "gi"
            };

            var string = RegExp.prototype.toString.call(re);

            print("/source/gi", string);
        }
    },
    {
        name: "RegExp.prototype.toString should use the string 'undefined' when the 'source' property is missing",
        body: function () {
            var overriddenSource = undefined;
            var expectedSource = "undefined";
            verifyToStringSource(/source/, overriddenSource, expectedSource);
        }
    },
    {
        name: "RegExp.prototype.toString should coerce the 'source' property to String",
    body: function () {
            var overriddenSource = 1;
            var expectedSource = overriddenSource.toString();
            verifyToStringSource(/source/, overriddenSource, expectedSource);
        }
    },
    {
        name: "RegExp.prototype.toString should use the 'source' property from a RegExp subclass",
        body: function () {
            class Subclass extends RegExp {}
            var overriddenSource = "source";
            var expectedSource = overriddenSource;
            verifyToStringSource(new Subclass(), overriddenSource, expectedSource);
        }
    },
    {
        name: "RegExp.prototype.toString should use the string 'undefined' when the 'flags' property is missing",
        body: function () {
            var overriddenFlags = undefined;
            var expectedFlags = "undefined";
            verifyToStringFlags(/./g, overriddenFlags, expectedFlags);
        }
    },
    {
        name: "RegExp.prototype.toString should coerce the 'flags' property to String",
        body: function () {
            var overriddenFlags = 1;
            var expectedFlags = overriddenFlags.toString();
            verifyToStringFlags(/./g, overriddenFlags, expectedFlags);
        }
    },
    {
        name: "RegExp.prototype.toString should use the 'flags' property from a RegExp subclass",
        body: function () {
            class Subclass extends RegExp {}
            var overriddenFlags = 'imy';
            var expectedFlags = overriddenFlags;
            verifyToStringFlags(new Subclass(), overriddenFlags, expectedFlags)
        }
    },
]);

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
