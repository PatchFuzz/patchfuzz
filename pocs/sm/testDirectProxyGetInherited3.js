;

var hits = 0, limit = 10;
var proto = new Proxy({}, {
    get(t, id, r) {
        print(r, obj);
        if (hits++ >= limit)
            return "ding";
        return obj[id];
    }
});

var obj = Object.create(proto);
print(obj.prop, "ding");

hits = 0;
limit = Infinity;
print(() => obj.prop, InternalError);
print(hits > 10, true);
