print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "JSON.stringify on proxy object with different length",
    body: function () {
        var i = 0;
        var ret = JSON.stringify(new Proxy([], {
            get(t, pk, r){
                if (pk === "length") {
                    return ++i;
                }
                return Reflect.get(t, pk, r);
            }
        }));
        print("[null]", ret, "JSON.stringify will work on the array with the length 1");
        print(1, i, 'proxy.get with property "length" will be called only once');
    }
  },
  {
    name: "JSON.stringify on proxy object with length > 2**31",
    body: function () {
        print(() =>
        JSON.stringify(new Proxy([], {
            get(t, pk, r){
                if (pk === "length") {
                    return 2**31 + 1;
                }
                return Reflect.get(t, pk, r);
            }
        })), RangeError, "JSON.stringify will throw range error when needs to allocate string more that 2**31", "String length is out of bound");
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
