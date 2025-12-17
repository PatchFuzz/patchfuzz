function cmp_string_string(a,b) {
  return a === b;
}

print(cmp_string_string("a", "a"), true);
print(cmp_string_string("a", "b"), false);
print(cmp_string_string("a", 1), false);

function cmp_string_string2(a,b) {
  return a === b;
}

print(cmp_string_string2("a", 1.1), false);
print(cmp_string_string2("a", 2), false);
print(cmp_string_string2("a", {}), false);

function cmp_string_string3(a,b) {
  return a !== b;
}

print(cmp_string_string3("a", "a"), false);
print(cmp_string_string3("a", "b"), true);
print(cmp_string_string3("a", 1), true);

function cmp_string_string4(a,b) {
  return a !== b;
}

print(cmp_string_string4("a", 1.1), true);
print(cmp_string_string4("a", 2), true);
print(cmp_string_string4("a", {}), true);
