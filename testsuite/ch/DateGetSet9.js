




var d = new Date();

d.setDate(12345678);
d.setTime(456789);

WScript.Echo("toISOString : " + d.toISOString());
WScript.Echo("toJSON : " + d.toJSON());



d = new Date(Number.NaN);
try
{
   d.toISOString();
} catch(e) {
    WScript.Echo("NaN Date toISOString: " + e.name + " : " + e.message);
}
WScript.Echo("NaN Date toJSON:: " + d.toJSON());




d = new Date(Infinity);
try {
    d.toISOString();
} catch(e) {
    WScript.Echo("Infinity Date toISOString : " + e.name + " : " + e.message);
}
WScript.Echo("Infinity Date toJSON : " + d.toJSON());




d = {
    toISOString: 1,
    toJSON: Date.prototype.toJSON
};
try {
    d.toJSON();
} catch(e) {
    WScript.Echo("Object toISOString not callable : " + e.name + " : " + e.message);
}




d = {
    toISOString: function() {
        return "Fake JSON : Object";
    },
    toJSON: Date.prototype.toJSON
};
WScript.Echo("Object toJSON : " + d.toJSON());




String.prototype.toISOString = function() {
    return "Fake JSON : " + this;
};
String.prototype.toJSON = Date.prototype.toJSON;
d = "String";
WScript.Echo("String toJSON : " + d.toJSON());




WScript.Echo("getYear 2000: " + new Date("January 1 2000").getYear());
WScript.Echo("getYear 1899: " + new Date("January 1 1899").getYear());

Object.defineProperty(Date.prototype, "valueOf", {get: function() {WScript.Echo("get fired");}});
var d = new Date();
d.toJSON();
