var s = "\ue531\ue531\ue531";
print(s.codePointAt(0), 0xe531);
print(s.codePointAt(1), 0xe531);
print(s.codePointAt(2), 0xe531);


s = "\ue531\ue531\ue5310n".split(/\d[^]/)[0];
print(s.codePointAt(0), 0xe531);
print(s.codePointAt(1), 0xe531);
print(s.codePointAt(2), 0xe531);
