;

let names = getAllPrefNames();
print(names.length > 0, true, "Expected at least one pref!");
print(new Set(names).size, names.length, "Unexpected duplicate pref name");

for (let name of names) {
    let val = getPrefValue(name);
    print(typeof val === "number" || typeof val === "boolean", true);
}



print(getPrefValue("site_based_pretenuring"), false);
print(getPrefValue("tests.uint32-pref"), 123450);


setPrefValue("tests.uint32-pref", 54321);
print(getPrefValue("tests.uint32-pref"), 54321);


print(() => setPrefValue("site_based_pretenuring", true),
    Error, /startup pref/);
print(getPrefValue("site_based_pretenuring"), false);


let ex;
try {
    getPrefValue("some.invalid.pref");
} catch (e) {
    ex = e;
}
print(ex.toString(), "Error: invalid pref name");
