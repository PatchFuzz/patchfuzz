;

var map = new Map();
map.set("self", map);

var magic = deserialize(serialize(map));
print(magic.get("self"), magic);
print(magic.size, 1);

map = new Map();
map.set(map, "self");

magic = deserialize(serialize(map));
print(magic.get(magic), "self");
print(magic.size, 1);

var values = [
    "a", "\uDEFF", undefined, null, -3.5, true, false, NaN, 155, -2
]

map = new Map();
for (var value of values) {
    map.set(value, value);
}

magic = deserialize(serialize(map));
var i = 0;
for (value of magic) {
    print(value[0], value[1]);
    print(value[0], values[i++]);
}

print([...map.keys()], [...magic.keys()]);
print([...map.values()], [...magic.values()]);

var obj = {a: 1};
obj.map = new Map();
obj.map.set("obj", obj);

magic = deserialize(serialize(obj));

print(magic.map.get("obj"), magic);
print(magic.a, 1);

map = new Map();
map.set("a", new Number(1));
map.set("b", new String("aaaa"));
map.set("c", new Date(NaN));

magic = deserialize(serialize(map));

print(magic.get("a").valueOf(), 1);
print(magic.get("b").valueOf(), "aaaa");
print(magic.get("c").valueOf(), NaN);

print([...map.keys()], ["a", "b", "c"]);

map = new Map();
map.set("x", new Map());
map.get("x").set("x", map);
map.get("x").set("b", null);

magic = deserialize(serialize(map));

print(magic.get("x").get("x"), magic);
print(magic.get("x").get("b"), null);

map = new Map()
map.set({a: 1}, "b");

magic = deserialize(serialize(map));

obj = [...magic.keys()][0];
print(obj.a, 1);
print(magic.get(obj), "b");


map = new Map();
map.a = "aaaaa";
magic = deserialize(serialize(map));
print("a" in magic, false);
print(Object.keys(magic).length, 0);


map = new Map();
Object.setPrototypeOf(map, null);
Map.prototype.set.call(map, "self", map);
magic = deserialize(serialize(map));
print(magic.get("self"), magic);
print(magic.size, 1);


obj = {
    a: new Map(),
    get b() {
        obj.a.delete("test");
        return "invoked";
    }
}
obj.a.set("test", "hello");
print(obj.a.has("test"), true);
magic = deserialize(serialize(obj));
print(obj.a.has("test"), false);
print(magic.a.size, 1);
print(magic.a.get("test"), "hello");
print([...magic.a.keys()].toString(), "test");
print(magic.b, "invoked");