print("Empty string:");
dumpStringRepresentation("");

print("\nResult of coercion to string:");
dumpStringRepresentation();

print("\nString with an index value:");
dumpStringRepresentation((12345).toString());

print("\ns = Simple short atom:");
var s = "xxxxxxxx";
dumpStringRepresentation(s);


print("\ns + s: Non-atom flat:");
var s2 = s + s;
dumpStringRepresentation(s2);

print("\nNon-Latin1 flat:");
var j = "渋谷区";
dumpStringRepresentation(j);

print("\nt = Non-inline atom:");
var t = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; 
dumpStringRepresentation(t);

print("\nr1 = t + s: Simple rope:");
var r1 = t + s;
dumpStringRepresentation(r1);



print("\nr1, former rope after flattening, now extensible:");
r1.match(/x/);
dumpStringRepresentation(r1);

print("\nt, s: Original leaves, representation unchanged:");
dumpStringRepresentation(t);
dumpStringRepresentation(s);


print("\nr2 = r1 + s: Rope with extensible leftmost child:");
var r2 = r1 + s;
dumpStringRepresentation(r2);


print("\nr2: flattened, stole r1's buffer:");
r2.match(/x/);
dumpStringRepresentation(r2);

print("\nr1: mutated into a dependent string:");
dumpStringRepresentation(r1);

print("\nr3 = r2 + s: a new rope with an extensible leftmost child:");
r3 = r2 + s;
r3.match(/x/);
dumpStringRepresentation(r3);

print("\nr2: now mutated into a dependent string");
dumpStringRepresentation(r2);

print("\nr1: now a doubly-dependent string, because of r2's mutation:");
dumpStringRepresentation(r1);

print("\nt, s: Original leaves, representation unchanged:");
dumpStringRepresentation(t);
dumpStringRepresentation(s);


print("\nExtensible:");
var e = newString("一二三四五六七八九*一二三四五六七八", { capacity: 80 });
dumpStringRepresentation(e);



print("\nFlattened dag with shared leaves:");
var e_flat = newRope(e, newRope(e, "!"));
ensureLinearString(e_flat);
dumpStringRepresentation(e_flat);
print(e_flat.charAt(e.length), e_flat.charAt(0));

for (var str of representativeStringArray())
    dumpStringRepresentation(str);
