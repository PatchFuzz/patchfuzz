gczeal(0);

function makeExtensibleStrFrom(str) {
  var left = str.substr(0, str.length/2);
  var right = str.substr(str.length/2, str.length);
  var ropeStr = left + right;
  return ensureLinearString(ropeStr);
}

function repr(s) {
  return JSON.parse(stringRepresentation(s));
}

function dependsOn(s1, s2) {
  const rep1 = JSON.parse(stringRepresentation(s1));
  const rep2 = JSON.parse(stringRepresentation(s2));
  return rep1.base && rep1.base.address == rep2.address;
}


var original = makeExtensibleStrFrom('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm');


var Nbase = makeExtensibleStrFrom('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm');
var T1 = newDependentString(Nbase, 0, 60, { tenured: true });



var T2 = newDependentString(T1, 30, { tenured: true });

print(dependsOn(T2, Nbase), "expect: T2 -> base");


var Nbase2 = newRope(Nbase, "ABC");
ensureLinearString(Nbase2);
var Ndep1 = Nbase;

print(dependsOn(T1, Ndep1), "expect: T1 -> Ndep1");
print(dependsOn(Ndep1, Nbase2), "expect: Ndep1 -> Nbase2");





var Tbase3 = makeExtensibleStrFrom('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm');
minorgc();
var T3 = newDependentString(Tbase3, 0, 30, { tenured: true });
var Nbase4 = newRope(Tbase3, "DEF");
ensureLinearString(Nbase4);
print(repr(Tbase3).isTenured, true, "Tbase3 is tenured");
print(repr(Tbase3).flags.includes("EXTENSIBLE"), true, "Tbase3 is extensible");
print(repr(Nbase4).flags.includes("DEPENDENT_BIT"), false, "expect: Nbase4 is not a dependent string")
print(repr(T3).flags.includes("DEPENDENT_BIT"), true, "expect: T3 is a dependent string")
print(dependsOn(T3, Tbase3), "expect: T3 -> Tbase3");

function bug1879918() {
  const s = JSON.parse('["abcdefabcdefabcdefabcdefabcdefabcdefabcdef"]')[0];
  const dep = newDependentString(s, 1, { tenured: true });
  minorgc();
  print(dep, "bcdefabcdefabcdefabcdefabcdefabcdefabcdef");
}
bug1879918();
