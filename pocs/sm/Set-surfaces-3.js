var s = new Set;
print(s.has(), false);
print(s.delete(), false);
print(s.has(), false);
print(s.add(), s);
print(s.has(), true);
print(s.delete(), true);
print(s.has(), false);
