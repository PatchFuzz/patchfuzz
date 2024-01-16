













assert (Date.length == 7);

var d;

try
{
  d = new Date({toString: function() { throw new Error("foo"); }});
  assert (false);
}
catch (e)
{
  assert (e instanceof Error);
  assert (e.message === "foo");
}

d = new Date("abcd");
assert (isNaN(d.valueOf()));

d = new Date();
assert (!isNaN(d.valueOf()));

d = new Date("2015-01-01");
assert (d.valueOf() == 1420070400000);

d = new Date(1420070400000);
assert (d.valueOf() == 1420070400000);

d = new Date(2015,0,1,0,0,0,0);
assert (d.valueOf() - (d.getTimezoneOffset() * 60000) == 1420070400000);

d = new Date(8.64e+15);
assert (d.valueOf() == 8.64e+15);

d = new Date(8.64e+15 + 1);
assert (isNaN(d.valueOf()));

d = new Date(20000000, 0, 1);
assert (isNaN(d.valueOf()));

d = new Date(0, 20000000, 1);
assert (isNaN(d.valueOf()));

var Obj = function (val)
{
  this.value = val;
  this.valueOf = function () { throw new ReferenceError ("valueOf-" + this.value); };
  this.toString = function () { throw new ReferenceError ("toString-"+ this.value); };
};

try
{
  d = new Date (new Obj (1), new Obj (2));
  
  assert (false);
}
catch (e)
{
  assert (e instanceof ReferenceError);
  assert (e.message === "valueOf-1");
}

assert (typeof Date (2015) == "string");
assert (typeof Date() != typeof (new Date ()));

var sym = Symbol();
var date;

try {
  date = new Date(sym, 11, 17, 3, 24, 0);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  date = new Date(1997, sym, 17, 3, 24, 0);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, sym, 3, 24, 0);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, 17, sym, 24, 0);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, 17, 3, sym, 0);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, 17, 3, 24, sym);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  date = new Date(1997, 11, 17, 3, 24, 0, sym);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
