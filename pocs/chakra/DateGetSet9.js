var d = new Date();

d.setDate(12345678);
d.setTime(456789);

print("toISOString : " + d.toISOString());
print("toJSON : " + d.toJSON());



d = new Date(Number.NaN);
try
{
   d.toISOString();
} catch(e) {
    print("NaN Date toISOString: " + e.name + " : " + e.message);
}
print("NaN Date toJSON:: " + d.toJSON());




d = new Date(Infinity);
try {
    d.toISOString();
} catch(e) {
    print("Infinity Date toISOString : " + e.name + " : " + e.message);
}
print("Infinity Date toJSON : " + d.toJSON());




d = {
    toISOString: 1,
    toJSON: Date.prototype.toJSON
};
try {
    d.toJSON();
} catch(e) {
    print("Object toISOString not callable : " + e.name + " : " + e.message);
}




d = {
    toISOString: function() {
        return "Fake JSON : Object";
    },
    toJSON: Date.prototype.toJSON
};
print("Object toJSON : " + d.toJSON());




String.prototype.toISOString = function() {
    return "Fake JSON : " + this;
};
String.prototype.toJSON = Date.prototype.toJSON;
d = "String";
print("String toJSON : " + d.toJSON());




print("getYear 2000: " + new Date("January 1 2000").getYear());
print("getYear 1899: " + new Date("January 1 1899").getYear());

Object.defineProperty(Date.prototype, "valueOf", {get: function() {print("get fired");}});
var d = new Date();
d.toJSON();
