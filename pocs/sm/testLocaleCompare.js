print("undefined".localeCompare(), 0);
print("a".localeCompare(), "a".localeCompare("undefined"));
print("a".localeCompare("b"), -1);
print("a".localeCompare("b", "en"), -1);
print("b".localeCompare("a"), 1);
print("b".localeCompare("a", "en"), 1);
print("a".localeCompare("a"), 0);
print("a".localeCompare("a", "en"), 0);
