print(typeof foo === "undefined", true);
print(typeof foo !== "undefined", false);

print("undefined" === typeof foo, true);
print("undefined" !== typeof foo, false);

print(typeof foo > "u", true);
print(typeof foo < "u", false);

print("u" < typeof foo, true);
print("u" > typeof foo, false);

print(typeof foo >= "u", true);
print(typeof foo <= "u", false);

print("u" <= typeof foo, true);
print("u" >= typeof foo, false);
