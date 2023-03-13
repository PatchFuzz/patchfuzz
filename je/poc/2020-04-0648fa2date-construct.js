













print(Date.length == 7);

var d;

try
{
  d = new Date({toString: function() { throw new Error("foo"); }});
  print(false);
}
catch (e)
{
  print(e instanceof Error);
  print(e.message === "foo");
}

d = new Date("abcd");
print(isNaN(d.valueOf()));

d = new Date();
print(!isNaN(d.valueOf()));

d = new Date("2015-01-01");
print(d.valueOf() == 1420070400000);

d = new Date(1420070400000);
print(d.valueOf() == 1420070400000);

d = new Date(2015,0,1,0,0,0,0);
print(d.valueOf() - (d.getTimezoneOffset() * 60000) == 1420070400000);

d = new Date(8.64e+15);
print(d.valueOf() == 8.64e+15);

d = new Date(8.64e+15 + 1);
print(isNaN(d.valueOf()));

d = new Date(20000000, 0, 1);
print(isNaN(d.valueOf()));

d = new Date(0, 20000000, 1);
print(isNaN(d.valueOf()));

var Obj = function (val)
{
  this.value = val;
  this.valueOf = function () { throw new ReferenceError ("valueOf-" + this.value); };
  this.toString = function () { throw new ReferenceError ("toString-"+ this.value); };
};

try
{
  d = new Date (new Obj (1), new Obj (2));
  
  print(false);
}
catch (e)
{
  print(e instanceof ReferenceError);
  print(e.message === "valueOf-1");
}

print(typeof Date (2015) == "string");
print(typeof Date() != typeof (new Date ()));

var sym = Symbol();
var date;

try {
  date = new Date(sym, 11, 17, 3, 24, 0);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  date = new Date(1997, sym, 17, 3, 24, 0);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, sym, 3, 24, 0);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, 17, sym, 24, 0);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, 17, 3, sym, 0);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, 17, 3, 24, sym);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, 17, 3, 24, 0, sym);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}
