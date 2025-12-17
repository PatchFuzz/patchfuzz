;

var set = new Set();
set.add(set);

var magic = deserialize(serialize(set));
print(magic.size, 1);
print(magic.values().next().value, magic);

var values = [
    "a", "\uDEFF", undefined, null, -3.5, true, false, NaN, 155, -2
]

set = new Set();
for (var value of values) {
    set.add(value)
}

magic = deserialize(serialize(set));
var i = 0;
for (value of magic) {
    print(value, values[i++]);
}

print([...set.keys()], [...magic.keys()]);
print([...set.values()], [...magic.values()]);

var obj = {a: 1};
obj.set = new Set();
obj.set.add(obj);

magic = deserialize(serialize(obj));

print(magic.set.values().next().value, magic);
print(magic.a, 1);

set = new Set();
set.add(new Number(1));
set.add(new String("aaaa"));
set.add(new Date(NaN));

magic = deserialize(serialize(set));

values = magic.values();
print(values.next().value.valueOf(), 1);
print(values.next().value.valueOf(), "aaaa");
print(values.next().value.valueOf(), NaN);
print(values.next().done, true);


set = new Set();
set.a = "aaaaa";
magic = deserialize(serialize(set));
print("a" in magic, false);
print(Object.keys(magic).length, 0);


set = new Set();
Object.setPrototypeOf(set, null);
Set.prototype.add.call(set, "aaa");
magic = deserialize(serialize(set));
print(magic.has("aaa"), true);
print(magic.size, 1);


obj = {
    a: new Set(),
    get b() {
        obj.a.delete("test");
        return "invoked";
    }
}
obj.a.add("test");
print(obj.a.has("test"), true);
magic = deserialize(serialize(obj));
print(obj.a.has("test"), false);
print(magic.a.size, 1);
print([...magic.a.keys()].toString(), "test");
print(magic.b, "invoked");