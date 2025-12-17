;
;

var s = '';

var handler = {
    get: function (recipient, name) {
        if (name == 'length') {
            s += 'L';
            return 2;
        } else {
            s += name;
            return name;
        }
    }
};

var it = Array.prototype[Symbol.iterator].call(new Proxy([0, 1], handler));

print(it, "0");
s += ' ';
print(it, "1");
s += ' ';
print(it, undefined);
print(s, "L0 L1 L");

s = '';
var ki = Array.prototype.keys.call(new Proxy([0, 1], handler));

print(ki, 0);
s += ' ';
print(ki, 1);
s += ' ';
print(ki, undefined);
print(s, "L L L");

s = '';
var ei = Array.prototype.entries.call(new Proxy([0, 1], handler));

print(ei, [0, "0"]);
s += ' ';
print(ei, [1, "1"]);
s += ' ';
print(ei, undefined);
print(s, "L0 L1 L");
