let invoked = false;
Object.defineProperty(Array.prototype, '0', {set: function () {
    invoked = true;
}});

let result = [1, 2, 3].slice(1);
print(invoked, false);

let proxy = new Proxy({}, {
    get: function (target, name, proxy) {
        switch (name) {
          case "length":
            return 2;
          case "0":
            return 15;
          case "1":
            
          default:
            print(false, true);
        }
    },
    has: function (target, name) {
        switch (name) {
          case "0":
            return true;
          case "1":
            return false;
          default:
            print(false, true);
        }
    }
})
result = Array.prototype.slice.call(proxy, 0);
print(result.length, 2);
print(0 in result, true);
print(1 in result, false);
print(result[0], 15);
