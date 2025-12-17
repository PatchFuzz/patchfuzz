print("..\\UnitTestFramework\\UnitTestFramework.js");

function makeProperty(obj, prop) {
    Object.defineProperty(obj, prop, {
        configurable: false,
        writable: true,
        value: 'basic'
    });
}

var tests = [
    {
        name: "Delete non-configurable property on Array.prototype.copyWithin",
        body: function () {
            var obj = { length: 4 };
            makeProperty(obj, '3');
            print(() => Array.prototype.copyWithin.call(obj, 3, 0), TypeError, "copyWithin is trying to delete the non-configurable property", "Cannot delete non-configurable property '3'");
        }
    },
    {
        name: "Delete non-configurable indexed property of TypedArray on Array.prototype.copyWithin",
        body: function () {
            var ta = Int8Array.of(0, 1, 2);
            
            
            
            Object.defineProperty(ta, "length", { value: 4 });
            print(() => Array.prototype.copyWithin.call(ta, 1, 2), TypeError, "copyWithin is trying to delete the non-configurable indexed property", "Cannot delete non-configurable property '2'");
        }
    },
    {
        name: "Delete non-configurable property on Array.prototype.pop",
        body: function () {
            var obj = { length: 4 };
            makeProperty(obj, '3');
            print(() => Array.prototype.pop.call(obj), TypeError, "pop is trying to delete the non-configurable property", "Cannot delete non-configurable property '3'");
        }
    },
    {
        name: "Delete non-configurable property on Array.prototype.shift",
        body: function () {
            var obj = { length: 4 };
            makeProperty(obj, '3');
            print(() => Array.prototype.shift.call(obj), TypeError, "shift is trying to delete the non-configurable property", "Cannot delete non-configurable property '3'");
        }
    },
    {
        name: "Delete non-configurable property on Array.prototype.reverse",
        body: function () {
            var obj = { length: 4 };
            makeProperty(obj, '3');
            print(() => Array.prototype.reverse.call(obj), TypeError, "reverse is trying to delete the non-configurable property", "Cannot delete non-configurable property '3'");
        }
    },

];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
