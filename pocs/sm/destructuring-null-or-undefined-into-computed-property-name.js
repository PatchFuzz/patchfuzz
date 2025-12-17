;
;

var outer = "unmodified";

function f(v)
{
  if (v + "")
    ({ [(outer = "modified")]: v } = v);
}

print(outer, "unmodified");
f(true);
print(outer, "modified");

outer = "unmodified";
f({});
print(outer, "modified");

outer = "unmodified";
print(() => f(null), TypeError);
print(outer, "unmodified");

print(() => f(undefined), TypeError);
print(outer, "unmodified");


function g(v)
{
  if (v + "")
    ({ [{ toString() { outer = "modified"; return 0; } }]: v } = v);
}

outer = "unmodified";
g(true);
print(outer, "modified");

outer = "unmodified";
g({});
print(outer, "modified");

outer = "unmodified";
print(() => g(undefined), TypeError);
print(outer, "unmodified");

print(() => g(null), TypeError);
print(outer, "unmodified");
