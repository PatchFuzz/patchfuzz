print(typeof(0) == "zero");
print(typeof(0) != "zero");


print(typeof(0) == "zero" && typeof(0) == "zero");
print(typeof(0) == "zero" && typeof(0) != "zero");
print(typeof(0) != "zero" && typeof(0) == "zero");
print(typeof(0) != "zero" && typeof(0) != "zero");

print(typeof(0) == "zero" || typeof(0) == "zero");
print(typeof(0) == "zero" || typeof(0) != "zero");
print(typeof(0) != "zero" || typeof(0) == "zero");
print(typeof(0) != "zero" || typeof(0) != "zero");



function one() { return 1; }

print(typeof(0) == "zero" && one() < 0);
print(typeof(0) == "zero" && one() > 0);
print(typeof(0) != "zero" && one() < 0);
print(typeof(0) != "zero" && one() > 0);

print(typeof(0) == "zero" || one() < 0);
print(typeof(0) == "zero" || one() > 0);
print(typeof(0) != "zero" || one() < 0);
print(typeof(0) != "zero" || one() > 0);


print(one() < 0 && typeof(0) == "zero");
print(one() < 0 && typeof(0) != "zero");
print(one() > 0 && typeof(0) == "zero");
print(one() > 0 && typeof(0) != "zero");

print(one() < 0 || typeof(0) == "zero");
print(one() < 0 || typeof(0) != "zero");
print(one() > 0 || typeof(0) == "zero");
print(one() > 0 || typeof(0) != "zero");
