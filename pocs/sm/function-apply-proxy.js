var proxy = new Proxy({}, {
    get: function (target, name, proxy) {
        switch (name) {
          case "length":
            return 2;
          case "0":
            return 15;
          case "1":
	    return undefined;
          default:
            print(false, true);
        }
    },
    has: function (target, name) {
        print(false, true);
    }
});
function foo() {
    print(arguments.length, 2);
    print(arguments[0], 15);
    print(1 in arguments, true);
    print(arguments[1], undefined);
}
foo.apply(null, proxy);
